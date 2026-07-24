/**
 * Decoded JWT token payload structure
 */
export interface DecodedToken {
  id: string;
  email: string;
  name: string;
  surname: string;
  roleId: string;
  expire: string;
  iat: string;
  roleName: string;
  organizationId: string;
  tenantId: string;
  accessExpiresAt?: string;
  access_expires_at?: string;
  invitationType?: string;
  isSuperAdmin?: boolean;
  is_super_admin?: boolean;
}

/**
 * Extracts and decodes the payload from a JWT token.
 *
 * SECURITY WARNING:
 * This function performs client-side JWT decoding WITHOUT signature verification.
 * The decoded data should ONLY be used for UI display purposes (e.g., showing user name).
 *
 * NEVER use this data for:
 * - Authorization decisions (e.g., checking if user is admin)
 * - Access control (e.g., showing/hiding features based on role)
 * - Any security-sensitive operations
 *
 * All authorization and permission checks MUST be performed on the backend,
 * which validates the JWT signature before trusting the payload.
 *
 * @param token - The JWT token string to decode
 * @returns The decoded token payload or null if invalid
 */
export const extractUserToken = (
  token: string
): DecodedToken | null => {
  if (!token) {
    return null;
  }

  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      return null;
    }
    let base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4) {
      base64 += "=";
    }
    const payloadJson = atob(base64);
    const payload = JSON.parse(payloadJson);
    return payload as DecodedToken;
  } catch (e) {
    console.error("Error decoding token payload:", e);
    return null;
  }
};
