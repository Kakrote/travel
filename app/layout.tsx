import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/smoothScroll";
import CommonLayout from "@/components/commonLayout";

const bebasNeue = localFont({
  src: "../fonts/Bebas_Neue/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Travel",
  description: "Experience the ultimate travel escape with Aura Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <CommonLayout>
            {children}
          </CommonLayout>
        </SmoothScroll>
      </body>
    </html>
  );
}

