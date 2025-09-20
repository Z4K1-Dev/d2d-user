'use client'
import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  return (
    <>
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        /* * Keyframes for the border animation.
         * We animate the --border-angle custom property from 0deg to 360deg.
         * This changing angle is used in the conic-gradient background of the card,
         * creating the effect of a rotating highlight.
        */
        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }

        /* * The .animate-border class applies the animation.
         * The animation 'border-spin' runs for 6 seconds, is linear, and repeats infinitely.
        */
        .animate-border {
            animation: border-spin 6s linear infinite;
        }
      `}</style>
    <div className={cn("w-full flex items-center justify-center p-4", className)}>
      {/* * The outer div creates the animated border effect.
       * The accent color has been changed to a teal/cyan theme.
       */}
      <div className="w-full max-w-full mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.teal.500)_86%,theme(colors.cyan.300)_90%,theme(colors.teal.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
        {/* The inner div holds the content, with the grid background image style. */}
        <div className="relative z-10 p-6 rounded-2xl w-full bg-white dark:bg-black h-full mx-auto">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}