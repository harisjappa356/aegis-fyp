import { Request, Response } from "express";
import path from "path";
import fs from "fs/promises";
import { generateToken } from "../utils/jwt.utils";
import { frontEndUrl } from "../config/constants";
import { sendEmail } from "../services/emailService";
import {
  logProcessing,
  logSuccess,
  logFailure,
} from "../utils/logger/logHelper";
import logger from "../utils/logger/fileLogger";
import { getUserByIdQuery } from "../utils/user.utils";
import { sequelize } from "../database/db";
import { QueryTypes } from "sequelize";

export const invite = async (
  _req: Request,
  res: Response,
  body: {
    to: string;
    name: string;
    surname?: string;
    roleId: number;
    organizationId: number;
    invitationType?: "EXISTING_ORG" | "NEW_ADMIN_ORG" | "TRIAL_3_MONTHS";
  }
) => {
  const { to, name, surname, roleId, organizationId, invitationType = "EXISTING_ORG" } = body;

  logProcessing({
    description: `starting invite email for user: ${to}`,
    functionName: "invite",
    fileName: "vwmailer.ctrl.ts",
    userId: _req.userId!,
    tenantId: _req.tenantId!,
  });
  logger.debug(
    `📧 Sending invitation email to ${to} for user ${name} ${surname || ""}`
  );

  try {
    const inviter = await getUserByIdQuery(_req.userId!);
    const masterEmail = (process.env.MASTER_ACCOUNT_EMAIL || "").trim().toLowerCase();
    const isMasterAccount =
      (inviter?.is_super_admin ?? false) ||
      (!!inviter?.email && inviter.email.toLowerCase() === masterEmail);

    // Rule 1: Only Master Account can create Type 2 (NEW_ADMIN_ORG) or Type 3 (TRIAL_3_MONTHS) invitations
    if ((invitationType === "NEW_ADMIN_ORG" || invitationType === "TRIAL_3_MONTHS") && !isMasterAccount) {
      return res.status(403).json({
        message: "Only the Master Account can issue Type 2 (Separate Admin) or Type 3 (3-Month Trial) invitations.",
      });
    }

    // Rule 2: 5-User Quota for Trial Accounts
    let accessExpiresAt: string | null = null;
    if (inviter?.access_expires_at || inviter?.invitation_type === "TRIAL_3_MONTHS") {
      // Count how many users have been invited by this trial owner
      const existingInvitesCount = await sequelize.query(
        "SELECT COUNT(*)::int as count FROM users WHERE invited_by_user_id = :inviterId",
        { replacements: { inviterId: _req.userId }, type: QueryTypes.SELECT }
      );
      const count = (existingInvitesCount[0] as any)?.count || 0;
      if (count >= 5) {
        return res.status(400).json({
          message: "3-Month Trial accounts are limited to inviting a maximum of 5 team members.",
        });
      }
      // Set accessExpiresAt to inviter's expiration date (cascading expiration)
      accessExpiresAt = new Date(inviter.access_expires_at!).toISOString();
    } else if (invitationType === "TRIAL_3_MONTHS") {
      // New 3-Month Trial issued by Master Account
      accessExpiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();
    }

    // Read the MJML template file
    const templatePath = path.resolve(
      __dirname,
      "../templates/account-creation-email.mjml"
    );
    const template = await fs.readFile(templatePath, "utf8");

    const token = generateToken({
      name,
      surname,
      roleId,
      email: to,
      organizationId,
      invitationType,
      accessExpiresAt,
      invitedByUserId: _req.userId,
    }) as string;

    const routePath = invitationType === "NEW_ADMIN_ORG" ? "/register" : "/user-reg";
    const link = `${frontEndUrl}${routePath}?${new URLSearchParams({
      token,
    }).toString()}`;

    // Data to be replaced in the template
    const data = { name, link };

    // Send the email
    const info = await sendEmail(
      to,
      "Create your account",
      // "Please use the link to create your account.",
      template,
      data
    );

    if (info.error) {
      console.error("Error sending email:", info.error);
      await logFailure({
        eventType: "Create",
        description: `Failed to send invitation email to ${to}: ${info.error.name}: ${info.error.message}`,
        functionName: "invite",
        fileName: "vwmailer.ctrl.ts",
        error: new Error(`${info.error.name}: ${info.error.message}`),
        userId: _req.userId!,
        tenantId: _req.tenantId!,
      });
      return res.status(206).json({
        error: `${info.error.name}: ${info.error.message}`,
        message: link,
      });
    } else {
      await logSuccess({
        eventType: "Create",
        description: `Successfully sent invitation email to ${to} for user ${name}`,
        functionName: "invite",
        fileName: "vwmailer.ctrl.ts",
        userId: _req.userId!,
        tenantId: _req.tenantId!,
      });
      return res.status(200).json({ message: "Email sent successfully" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    await logFailure({
      eventType: "Create",
      description: `Failed to send invitation email to ${to}`,
      functionName: "invite",
      fileName: "vwmailer.ctrl.ts",
      error: error as Error,
      userId: _req.userId!,
      tenantId: _req.tenantId!,
    });
    return res.status(500).json({
      error: "Failed to send email",
      details: (error as Error).message,
    });
  }
};
