import React from "react";
import { IconButton } from "@mui/material";
import { Info as GreyCircleInfoIcon } from "lucide-react";
import { useUserGuideSidebarContext } from "../UserGuide";

interface HelperIconProps {
  /** Path to the User Guide article (e.g., "ai-governance/model-inventory") */
  articlePath: string;
  size?: "small" | "medium" | "large";
}

const HelperIcon: React.FC<HelperIconProps> = ({ articlePath, size = "small" }) => {
  return null;
};

export default HelperIcon;
