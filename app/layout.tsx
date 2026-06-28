import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://kylemallien.com"),
  title: "Kyle Mallien — Build Wealth Through Business Acquisition",
  description:
    "Stop building from scratch. Learn to buy, scale, and own cash-flowing businesses with Kyle Mallien — the mentor behind $170M+ in student-led acquisitions and a community of 500+ owners.",
  keywords: [
    "business acquisition",
    "buy a business",
    "Kyle Mallien",
    "Elite Wealth Club",
    "acquisition coaching",
    "M&A mentorship",
    "build wealth",
  ],
  openGraph: {
    title: "Kyle Mallien — Build Wealth Through Business Acquisition",
    description:
      "Learn to buy, scale, and own cash-flowing businesses. $170M+ in student-led deals. 500+ owners and counting.",
    type: "website",
    url: "https://kylemallien.com",
    siteName: "Kyle Mallien",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Mallien — Build Wealth Through Business Acquisition",
    description:
      "Learn to buy, scale, and own cash-flowing businesses. $170M+ in student-led deals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: 'Gill Sans Web', 'Gill Sans', 'Gill Sans MT', 'Helvetica Neue', system-ui, sans-serif;
                --font-serif: 'Ailerons', 'Gill Sans Web', system-ui, sans-serif;
              }
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
