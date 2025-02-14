import type { Metadata } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_componants/Navbar";

const geistSans = Noto_Sans({
  subsets: ["latin"],
  weight:[ "200" ,"300" ,"400" ,"500" ,"600" ,"700" ,"800" ,"900"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cozomo",
  description: "Created By Sefoo333 - seifeldeenAli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
