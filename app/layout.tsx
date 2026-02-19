import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, IBM_Plex_Sans } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

// const dm_sans = DM_Sans({
//   variable: "--font-dm_sans",
//   subsets: ["latin"],
// })

const ibm_sans = IBM_Plex_Sans({
  variable: "--font-ibm_sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agniva Sengupta | Full Stack Engineer",
  description:
    "Full Stack Engineer & Open Source Aspirant. Building with Next.js, Go, and exploring Federated Learning.",
  keywords: [
    "Agniva Sengupta",
    "Full Stack Developer",
    "MERN Stack",
    "Golang",
    "Next.js Portfolio",
    "IIEST Shibpur",
    "Software Engineer",
  ],
  authors: [{ name: "Agniva Sengupta" }],
  creator: "Agniva Sengupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agniva.dev",
    title: "Agniva Sengupta | Full Stack Engineer",
    description:
      "Full Stack Engineer & Open Source Aspirant. Building with Next.js, Go, and exploring Federated Learning.",
    siteName: "Agniva Sengupta",
    images: [
      {
        url: "/preview.png", // You'll need to add an image file to your public folder
        width: 1200,
        height: 630,
        alt: "Agniva Sengupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agniva Sengupta | Full Stack Engineer",
    description:
      "Building scalable web apps and exploring distributed systems.",
    images: ["/preview.png"],
    creator: "@zenyashi",
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${inter.variable} ${ibm_sans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
