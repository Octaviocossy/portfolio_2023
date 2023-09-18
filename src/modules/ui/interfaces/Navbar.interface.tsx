"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

import { ERoutes } from "@/models";
import { Button, GitHub, Link } from "@/ui";
import { useTheme } from "@/hooks";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, handleTheme } = useTheme();

  return (
    <header className="px-4 max-w-2xl m-auto py-6 flex items-center space-x-4 justify-between absolute w-full left-0 right-0">
      <h1 className="font-bold text-xl">Octavio Cossy Torquati</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href={ERoutes.HOME} isCurrent={pathname === ERoutes.HOME}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={ERoutes.BLOG} isCurrent={pathname === ERoutes.BLOG}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <section className="space-x-4 flex">
        <Link
          href={"https://github.com/Octaviocossy/portfolio_2023"}
          target={"_blank"}
          className="flex items-center"
        >
          <GitHub className="mr-1" />
          Source
        </Link>
        <Button onClick={handleTheme}>
          {theme === "light" ? (
            <MoonIcon className="w-4 h-4 text-gray-700" />
          ) : (
            <SunIcon className="w-4 h-4 text-white" />
          )}
        </Button>
      </section>
    </header>
  );
};

export default Navbar;
