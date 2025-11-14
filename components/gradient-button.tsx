import React from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
      "px-4 py-1 font-medium text-white",
  "rounded-lg rounded-br-3xl", // all corners lg, bottom-right extra large
  "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
  "hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600",
  "transition-all duration-200 ease-out",
  "shadow-lg hover:shadow-xl",
  "active:scale-95",
  "text-[14px]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
)

GradientButton.displayName = "GradientButton"



