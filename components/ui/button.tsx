import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gold-primary text-black hover:bg-gold-accent hover:shadow-lg hover:shadow-gold-primary/20",
        luxury: "bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark bg-[length:200%_auto] hover:bg-[100%_0] transition-all duration-700 text-black uppercase tracking-[0.2em] font-bold shadow-[0_4px_25px_rgba(198,169,114,0.3)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.5)] border border-gold-light/20 relative overflow-hidden",
        outline: "border border-gold-primary/30 text-gold-primary bg-transparent hover:bg-gold-primary hover:text-black uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300",
        ghost: "text-text-muted hover:text-white hover:bg-white/5 uppercase tracking-[0.2em] text-[10px] transition-colors",
        darkGlass: "glass-panel text-white hover:text-gold-primary hover:border-gold-primary/50 transition-all uppercase tracking-[0.2em] text-[10px] font-bold shadow-2xl",
        glow: "bg-black text-gold-primary border border-gold-primary/20 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:bg-gold-primary/5 transition-all text-[10px] uppercase tracking-[0.3em] font-bold",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg tracking-[0.2em]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
