import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { storeConfig } from "@/config/store";
import "@/styles/globals.css";
import Header from "@/components/header/index";
import DefaultProviders from "@/providers/default";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${storeConfig.name} | ${storeConfig.slogan}`,
  description: storeConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-full">
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
      </body>
    </html>
  );
}
