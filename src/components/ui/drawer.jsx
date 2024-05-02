import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../lib/utils";

const DrawerContext = React.createContext<"top" | "bottom" | "left" | "right" | null>(null);

const Drawer = ({ shouldScaleBackground = true, ...props }) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerContext.Provider value={props.direction}>
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  </DrawerContext.Provider>
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const direction = React.useContext(DrawerContext);

    return (
      <DrawerPortal>
        <DrawerOverlay direction={props.direction} />
        <DrawerPrimitive.Content
          ref={ref}
          className={cn(
            "fixed z-50 flex h-auto flex-col rounded-t-[10px] border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950",
            (!direction || direction === "bottom") && "inset-x-0 bottom-0 mt-24",
            direction === "left" && "left-0 top-0 w-screen max-w-[300px] h-full",
            direction === "right" && "right-0 top-0 w-screen max-w-[300px] h-full",
            className
          )}
          {...props}
        >
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-gray-100 dark:bg-gray-800" />
          {children}
        </DrawerPrimitive.Content>
      </DrawerPortal>
    );
  }
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = DrawerPrimitive.Title.displayName;

const DrawerFooter = ({ className, ...props }) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = DrawerPrimitive.Description.displayName;

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
