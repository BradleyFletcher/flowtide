"use client";

import { forwardRef, ReactNode, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

export interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  icon?: ReactNode;
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
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-brand-teal text-white hover:bg-brand-blue focus:ring-brand-teal",
      secondary:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-300",
      ghost: "text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-300",
      dark: "bg-brand-deep text-white hover:bg-brand-navy focus:ring-brand-deep",
      light:
        "bg-white text-brand-deep border border-zinc-200 hover:border-brand-teal hover:text-brand-teal focus:ring-brand-teal",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-md gap-1.5",
      md: "px-5 py-2.5 text-base rounded-lg gap-2",
      lg: "px-6 py-3 text-lg rounded-lg gap-2.5",
    };

    const iconSizes = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
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

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && iconPosition === "left" && renderIcon()}
        {children}
        {icon && iconPosition === "right" && renderIcon()}
      </button>
    );
  }
);

BrandButton.displayName = "BrandButton";

export { BrandButton };
