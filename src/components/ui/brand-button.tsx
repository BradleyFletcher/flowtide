"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import {
  forwardRef,
  ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export interface BrandButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  icon?: ReactNode;
  disableHover?: boolean;
}

const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      iconPosition = "right",
      icon,
      disableHover = false,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold uppercase tracking-wider overflow-hidden rounded-full";

    const variants = {
      primary: "bg-gradient-to-r from-brand-mint to-brand-teal text-brand-deep",
      secondary: "bg-white text-brand-deep",
      ghost: "bg-transparent border-2 border-white text-white",
      dark: "bg-brand-deep text-white",
      light: "bg-white text-brand-deep border-2 border-brand-deep",
    };

    const sizes = {
      sm: "px-6 py-2 text-xs",
      md: "px-8 py-3 text-sm",
      lg: "px-10 py-4 text-base",
    };

    const iconGaps = {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    };

    const iconSizes = {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    };

    // Clone icon element and add consistent sizing
    const renderIcon = () => {
      if (!icon) return null;

      if (isValidElement(icon)) {
        return cloneElement(
          icon as React.ReactElement<{ className?: string }>,
          {
            className: cn(
              iconSizes[size],
              (icon as React.ReactElement<{ className?: string }>).props
                .className
            ),
          }
        );
      }

      return icon;
    };

    const getButtonColors = () => {
      if (!disableHover) {
        if (variant === "ghost") {
          return {
            backgroundColor: isHovered ? "#ffffff" : "transparent",
            color: isHovered ? "#040d59" : "#ffffff",
            borderColor: "#ffffff",
          };
        }
        if (variant === "dark") {
          return {
            backgroundColor: isHovered ? "#1e4f9e" : "#040d59",
          };
        }
        if (variant === "light") {
          return {
            backgroundColor: isHovered ? "#f4f4f5" : "#ffffff",
            borderColor: "#040d59",
          };
        }
      }
      return {};
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        animate={getButtonColors()}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{ position: "relative", zIndex: 20 }}
        onMouseEnter={() => !disableHover && setIsHovered(true)}
        onMouseLeave={() => !disableHover && setIsHovered(false)}
        {...props}
      >
        <motion.span
          className="absolute inset-0 bg-white/20 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <span className={cn("relative z-10 flex items-center", iconGaps[size])}>
          {icon && iconPosition === "left" && renderIcon()}
          {children}
          {icon && iconPosition === "right" && renderIcon()}
        </span>
      </motion.button>
    );
  }
);

BrandButton.displayName = "BrandButton";

export { BrandButton };
