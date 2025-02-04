import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export const metadata: Metadata = {
  title: "Sriram's Portfolio",
  description:
    "Explore my portfolio showcasing responsive web applications, scalable solutions, and modern development expertise.",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <main className="md:mx-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
