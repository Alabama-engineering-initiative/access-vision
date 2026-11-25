import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Access Vision | Mobile Eye Care in Alabama",
  description: "Comprehensive, affordable mobile eye care in Alabama communities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistSans.variable}`}>
        <header className={styles.header}><div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>Access Vision <span>Mobile Eye Clinic</span></Link>
          <nav className={styles.nav} aria-label="Main navigation"><ul>
            <li><Link href="/">Home</Link></li><li><Link href="/about">About Us</Link></li>
            <li><Link href="/team">Team</Link></li><li><Link href="/#services">Services</Link></li>
            <li><Link href="/#schedule">Find a Clinic</Link></li><li><Link href="/#impact">Impact</Link></li>
            <li><Link href="/#partnerships">Partnerships</Link></li><li><Link href="/#support">Support</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul></nav>
        </div></header>
        {children}
        <footer className={styles.footer}><p>&copy; Access Vision. All Rights Reserved.</p><div className={styles.nonProfitBadge}>501(c)(3) Non-Profit Organization (IRS Determination 2025)</div></footer>
      </body>
    </html>
  );
}
