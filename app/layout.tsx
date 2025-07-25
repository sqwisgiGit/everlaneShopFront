import type { Metadata } from "next";
import Header from "@/components/organisms/Header/Header";
import{ Abel, Anek_Gujarati } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/organisms/Footer";

import  { CounterStoreProvider } from '@/state/header-state-provider'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const agel = Abel({
  subsets: ['latin'],
  weight: '400'
})

export const anekGujarati = Anek_Gujarati({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${agel.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <CounterStoreProvider>
          <Header/>
            {children}
          <Footer/>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
