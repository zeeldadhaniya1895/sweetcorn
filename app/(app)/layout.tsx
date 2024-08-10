import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
