import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "border-transparent bg-white text-black hover:bg-white/80",
        variant === "secondary" && "border-transparent bg-white/10 text-white hover:bg-white/20",
        variant === "destructive" && "border-transparent bg-red-500/20 text-red-500",
        variant === "success" && "border-transparent bg-green-500/20 text-green-400",
        variant === "warning" && "border-transparent bg-yellow-500/20 text-[#f3b400]",
        variant === "outline" && "text-white border-white/20",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
