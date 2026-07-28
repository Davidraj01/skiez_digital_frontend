// src/pages/ui/interactive-hover-button.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Usage:
 * <InteractiveHoverButton to="/services">Our Services</InteractiveHoverButton>
 * External:
 * <InteractiveHoverButton href="https://example.com">Visit</InteractiveHoverButton>
 */
export function InteractiveHoverButton({
  to, // internal route (React Router)
  href, // external URL
  children,
  className = "",
  ...props
}) {
  const isExternal = href && /^https?:\/\//i.test(href);
  const Comp = to ? Link : href ? "a" : "button";
  const navProps = to
    ? { to }
    : href
    ? {
        href,
        ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      }
    : { type: "button" };

  return (
    <Comp
      {...navProps}
      {...props}
      className={cn(
        // ⬇️ your original base styles preserved
        "group bg-background relative w-auto h-14 cursor-pointer overflow-hidden",
        "rounded-full border p-2 px-6 text-center font-semibold",
        // layout/behavior
        "inline-flex items-center justify-center gap-2 select-none list-none",
        // keep transition smooth
        "transition will-change-transform",
        className
      )}
    >
      {/* Front layer (your dot + text) */}
      <div className="flex items-center gap-2 pointer-events-none">
        <div
          className="
            bg-primary h-2 w-2 rounded-full 
            transition-all duration-300
            group-hover:scale-[100.8]   /* same as your old effect */
          "
        />
        <span
          className="
            inline-block transition-all duration-300
            group-hover:translate-x-12 group-hover:opacity-0
          "
        >
          {children}
        </span>
      </div>

      {/* Hover layer (slides in) */}
      <div
        className="
          text-primary-foreground absolute inset-0 z-10
          flex h-full w-full items-center justify-center gap-2
          translate-x-12 opacity-0
          transition-all duration-300
          group-hover:-translate-x-5 group-hover:opacity-100
          pointer-events-none ml-6
        "
      >
        <span>{children}</span>
        <ArrowRight />
      </div>
    </Comp>
  );
}
