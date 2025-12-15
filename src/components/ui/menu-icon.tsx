import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuIconProps {
  isOpen: boolean;
  className?: string;
}

export const MenuIcon = ({ isOpen, className }: MenuIconProps) => {
  return isOpen ? (
    <X className={cn("h-6 w-6", className)} />
  ) : (
    <Menu className={cn("h-6 w-6", className)} />
  );
};
