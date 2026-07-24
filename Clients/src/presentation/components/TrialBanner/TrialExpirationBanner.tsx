import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";
import { Clock, AlertTriangle } from "lucide-react";
import { useAuth } from "../../../application/hooks/useAuth";

export const TrialExpirationBanner: React.FC = () => {
  const theme = useTheme();
  const { userToken } = useAuth();
  const [timeLeftStr, setTimeLeftStr] = useState<string | null>(null);
  const [isUrgent, setIsUrgent] = useState(false);
  const [expiryDateFormatted, setExpiryDateFormatted] = useState<string>("");

  useEffect(() => {
    const rawExpiresAt = userToken?.accessExpiresAt || userToken?.access_expires_at;
    if (!rawExpiresAt) {
      setTimeLeftStr(null);
      return;
    }

    const updateCountdown = () => {
      const expiryTime = new Date(rawExpiresAt).getTime();
      const now = Date.now();
      const diffMs = expiryTime - now;

      if (isNaN(expiryTime)) {
        setTimeLeftStr(null);
        return;
      }

      const formattedDate = new Date(expiryTime).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      setExpiryDateFormatted(formattedDate);

      if (diffMs <= 0) {
        setTimeLeftStr("Expired");
        setIsUrgent(true);
        return;
      }

      const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      if (days >= 1) {
        setTimeLeftStr(`${days} day${days > 1 ? "s" : ""} ${hours} hr${hours !== 1 ? "s" : ""} ${minutes} min${minutes !== 1 ? "s" : ""} left`);
        setIsUrgent(false);
      } else {
        setTimeLeftStr(`${hours} hr${hours !== 1 ? "s" : ""} ${minutes} min${minutes !== 1 ? "s" : ""} left`);
        setIsUrgent(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // update every minute
    return () => clearInterval(interval);
  }, [userToken]);

  if (!timeLeftStr) {
    return null;
  }

  const bgColor = isUrgent ? "#FEF2F2" : "#FFFBEB";
  const borderColor = isUrgent ? "#FCA5A5" : "#FCD34D";
  const textColor = isUrgent ? "#991B1B" : "#92400E";
  const iconColor = isUrgent ? "#DC2626" : "#D97706";

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        py: 1,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1.5}>
        {isUrgent ? <AlertTriangle size={18} color={iconColor} /> : <Clock size={18} color={iconColor} />}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: textColor,
            fontSize: "13px",
            letterSpacing: "0.01em",
          }}
        >
          {timeLeftStr === "Expired" ? (
            <span>Your trial access has expired. Access to platform features is restricted.</span>
          ) : (
            <span>
              <strong>Trial Access Active:</strong> {timeLeftStr} (Expires on {expiryDateFormatted})
            </span>
          )}
        </Typography>
      </Stack>
    </Box>
  );
};

export default TrialExpirationBanner;
