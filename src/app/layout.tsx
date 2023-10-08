import "../main.css";
import { Navbar } from "@/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme_provider";

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
        className={`${inter.className} m-auto bg-white-custom text-gray-800 dark:bg-gray-900 dark:text-gray-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
