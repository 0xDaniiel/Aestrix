import type { Metadata } from "next";
// import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
//   weight: ["400", "500"],
// });

// SEO metadata
export const metadata: Metadata = {
  title: "Aestrix | Custom Software Development Agency",
  description:
    "Aestrix is a modern software development agency specializing in building scalable web and mobile applications with cutting-edge technologies.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "custom software",
    "Aestrix",
    "tech agency",
  ],
  authors: [{ name: "Aestrix Team", url: "https://aestrix.dev" }],
  creator: "Aestrix",
  metadataBase: new URL("https://aestrix.dev"),
  openGraph: {
    title: "Aestrix - Custom Software Solutions",
    description:
      "We craft high-performance digital products tailored to your business needs.",
    url: "https://aestrix.dev",
    siteName: "Aestrix",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aestrix - Custom Software Solutions",
    description:
      "We build reliable, scalable applications to elevate your digital presence.",
    creator: "@0xdaniiel",
  },
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased bg-white text-gray-900`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
