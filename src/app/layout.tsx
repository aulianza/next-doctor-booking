import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctor Booking App",
  description: "by Ryan Aulia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="<generated>" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={clsx("bg-neutral-100", sora.className)}>
        <div className="max-w-[480px] mx-auto bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-100 md:shadow-md min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
