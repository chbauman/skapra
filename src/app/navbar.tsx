"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export function Navbar({ siteName, items }: { siteName: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Close on Escape and on a click anywhere outside the bar.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-black text-white border-b border-white/15"
    >
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="font-heading text-2xl tracking-wide">
          {siteName}
        </Link>
        <button
          type="button"
          className="p-2 -mr-2 rounded hover:text-brand focus-visible:outline-2 focus-visible:outline-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="site-menu"
          className="absolute right-0 top-full w-full sm:w-64 bg-black border-b border-white/15 sm:border sm:border-t-0 sm:rounded-bl-xl px-4 py-2"
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block py-3 text-lg font-medium hover:text-brand ${
                  pathname === item.href ? "text-brand" : "text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
