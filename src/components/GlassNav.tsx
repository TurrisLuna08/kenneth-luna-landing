"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  href: string;
}

interface GlassNavProps {
  logo?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  onCtaClick?: () => void;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];

export function GlassNav({
  logo = "KL",
  navLinks = DEFAULT_LINKS,
  ctaText = "Hablemos",
  onCtaClick,
}: GlassNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors"
          >
            {logo}
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={handleCtaClick}
              className="rounded-full bg-white text-black text-sm font-medium px-5 py-2 hover:bg-zinc-200 transition-colors"
            >
              {ctaText}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Abrir menú"
          >
            <span
              className={cn(
                "block w-5 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-5 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Menu */}
        <div
          className={cn(
            "absolute top-16 right-0 bottom-0 w-72 bg-zinc-900 border-l border-white/10 transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleCtaClick();
                }}
                className="w-full rounded-full bg-white text-black text-sm font-medium px-5 py-3 hover:bg-zinc-200 transition-colors"
              >
                {ctaText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}