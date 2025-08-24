import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/global.scss'
import '@/styles/global.css'
import { IoniconsLoader } from "@/components/IoniconsLoader/IoniconsLoader";
import { Loading } from "@/components/Loading/Loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Portfólio | Atila",
  description: "Meu portólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        <Loading />
        {children}
        <IoniconsLoader />
      </body>
    </html>
  );
}
