import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IMAGE_LINKS } from "@/lib/constants/image";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quick Metrics | Data Insights Platform for Small Businesses",
    template: "%s | Quick Metrics",
  },
  description:
    "Transform your sales data into actionable insights with our easy-to-use analytics platform built specifically for small businesses.",
  applicationName: "Quick Metrics",
  authors: [{ name: "Quick Metrics Team", url: "https://quickmetrics.io" }],
  generator: "Next.js",
  keywords: [
    "small business analytics",
    "sales data insights",
    "business dashboard",
    "data visualization",
    "sales reporting",
    "CSV data analysis",
    "business intelligence",
    "small business tools",
    "profit analysis",
    "sales trends",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "light dark",
  creator: "Quick Metrics",
  publisher: "Quick Metrics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Icons configuration
  icons: {
    icon: [
      { url: "/favico/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favico/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favico/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favico/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favico/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favico/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/favico/safari-pinned-tab.svg",
        color: "#4682B4",
      },
    ],
  },
  manifest: "/manifest.json",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Quick Metrics | Data Insights Platform for Small Businesses",
    description:
      "Transform your sales data into actionable insights with our easy-to-use analytics platform. Upload CSV files and get instant visualizations and business intelligence.",
    url: "https://quickmetrics.io",
    siteName: "Quick Metrics",
    images: [
      {
        url: IMAGE_LINKS.brandOpenGraphImage,
        width: 1200,
        height: 630,
        alt: "Quick Metrics - Small Business Insights Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Quick Metrics | Data Insights Platform for Small Businesses",
    description:
      "Transform your sales data into actionable insights with our easy-to-use analytics platform.",
    images: [IMAGE_LINKS.brandOpenGraphImage],
    creator: "@quickmetrics",
    site: "@quickmetrics",
  },

  // Apple Web App
  appleWebApp: {
    title: "Quick Metrics",
    statusBarStyle: "black-translucent",
    capable: true,
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Alternates
  alternates: {
    canonical: "https://quickmetrics.io",
    languages: {
      "en-US": "https://quickmetrics.io/en-US",
    },
  },

  // App Links
  appLinks: {
    web: {
      url: "https://quickmetrics.io",
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
