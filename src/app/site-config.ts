import type { ComponentProps } from "react";
import { Cover, Footer } from "@emeki/band-site-kit";

export const SHEET_ID =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSuB0nj51YoUGhSq5fmfVJa7DCKi_7_BmU_YJtYNtsvxdr7hljjMWDG2QqIk5MEP67PCIirklVxUohl/pub?output=csv";

export const coverProps: ComponentProps<typeof Cover> = {
  bandName: "Skapra Zombie",
  logoSrc: "/logo_quadratisch.jpg",
  logoAlt: "Skapra Zombie Logo",
  logoWidth: 1080,
  logoHeight: 1080,
};

export const footerProps: ComponentProps<typeof Footer> = {
  copyrightName: "Skapra Zombie",
  links: [
    { type: "email", href: "mailto:skaprazombie@gmail.com" },
    { type: "instagram", href: "https://www.instagram.com/skaprazombie/" },
  ],
};
