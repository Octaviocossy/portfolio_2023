import "../main.css";
import { Navbar } from "@/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

interface IProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octavio Cossy Torquati",
  description: "Portfolio",
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} m-auto bg-white text-gray-800 dark:bg-gray-900 dark:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
