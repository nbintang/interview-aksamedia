import * as React from "react";
import { X } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
const sheetVariants = tv({
  base: "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom:
        "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right:
        "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
    },
  },
  defaultVariants: {
    side: "right",
  },
});
interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ open, onOpenChange, children }, ref) => {
    const [isOpen, setIsOpen] = React.useState(open || false);

    React.useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open);
      }
    }, [open]);

    const handleOpenChange = (newState: boolean) => {
      setIsOpen(newState);
      onOpenChange?.(newState);
    };

    return (
      <SheetContext.Provider value={{ isOpen, onOpenChange: handleOpenChange }}>
        <div ref={ref}>{children}</div>
      </SheetContext.Provider>
    );
  }
);
Sheet.displayName = "Sheet";

interface SheetContextType {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined
);

const useSheet = () => {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be wrapped in <Sheet />");
  }
  return context;
};

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  const { onOpenChange } = useSheet();
  return (
    <button
      type="button"
      onClick={() => onOpenChange(true)}
      ref={ref}
      {...props}
    />
  );
});
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  const { onOpenChange } = useSheet();

  return (
    <button
      type="button"
      onClick={() => onOpenChange(false)}
      ref={ref}
      {...props}
    />
  );
});
SheetClose.displayName = "SheetClose";

const SheetOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isOpen } = useSheet();

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
});
SheetOverlay.displayName = "SheetOverlay";

interface SheetContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => {
    const { isOpen, onOpenChange } = useSheet();
    const sheetRef = React.useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = React.useState(isOpen);

    React.useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
      } else {
        const timeout = setTimeout(() => setIsVisible(false), 300);
        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          sheetRef.current &&
          !sheetRef.current.contains(event.target as Node)
        )
          onOpenChange(false);
      };

      if (isOpen) document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onOpenChange]);

    if (!isVisible) return null;

    return (
      <div className="fixed inset-0 z-50 pointer-events-none">
        <SheetOverlay className="pointer-events-auto" />
        <div
          ref={(node) => {
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
            sheetRef.current = node;
          }}
          className={cn(
            sheetVariants({ side }),
            "pointer-events-auto",
            className
          )}
          data-state={isOpen ? "open" : "closed"}
          {...props}
        >
          {children}
          <SheetClose className="absolute dark:text-white text-black right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
      </div>
    );
  }
);

SheetContent.displayName = "SheetContent";

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
));
SheetHeader.displayName = "SheetHeader";

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
));
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
