import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// TODO: need a storybook page for this component
const badgeVariants = cva(
  "inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        soft: "",
      },
      shape: {
        default: "rounded-md",
        round: "rounded-full",
      },
      color: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 ",
        success:
          "border-transparent bg-success text-white [a&]:hover:bg-success/90 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/60",
        error:
          "border-transparent bg-error text-white [a&]:hover:bg-error/90 focus-visible:ring-error/20 dark:focus-visible:ring-error/40 dark:bg-error/60",
      },
    },
    compoundVariants: [
      {
        variant: "soft",
        color: "success",
        className: "bg-success/10 text-success",
      },
      {
        variant: "soft",
        color: "error",
        className: "bg-error/10 text-error",
      },
    ],
    defaultVariants: {
      variant: "default",
      shape: "default",
      color: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  shape,
  color,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, shape, color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
