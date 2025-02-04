import { ReactNode } from "react";

export interface ButtonProps {
  href?: string;
  text: string;
  icon?: ReactNode; // Accepts JSX elements or null
  className?: string;
}
