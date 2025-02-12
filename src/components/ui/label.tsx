"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const labelVariants = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
});

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn(labelVariants(), className)} {...props} />
));

Label.displayName = "Label";

export { Label };