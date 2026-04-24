import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartProvider } from "./lib/cart-context";
import { AuthProvider } from "./lib/auth-provider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Miche — Artisan Bakery, Bengaluru",
  description:
    "La Miche is Bengaluru's finest artisan bakery, crafting slow-fermented sourdoughs, butter-laminated viennoiserie and classic French pâtisserie from heirloom-milled grains since 1987.",
  keywords: ["artisan bakery", "sourdough", "croissant", "Bengaluru bakery", "pâtisserie", "La Miche"],
  openGraph: {
    title: "La Miche — Artisan Bakery",
    description: "Baked with love, eaten with joy. Premium artisan bakery in Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
