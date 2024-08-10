import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css"
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider>
      <Navbar/>
      </SessionProvider >
        {children}
      </body>
    </html>
  );
}
