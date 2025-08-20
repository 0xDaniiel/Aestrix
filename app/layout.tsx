import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
  icons: {
    icon: "/images/aestrix.png",
  },
  authors: [{ name: "Aestrix Team", url: "https://aestrix.dev" }],
  creator: "Aestrix",
  metadataBase: new URL("https://aestrixdevs.digital/"),
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
      <body className={`${roboto.className}  bg-white text-gray-900`}>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
