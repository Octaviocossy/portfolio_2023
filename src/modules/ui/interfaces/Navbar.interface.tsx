"use client";

import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

import { ERoutes } from "@/models";
import { Button, GitHub, Link } from "@/ui";
import { useTheme } from "@/hooks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, handleTheme } = useTheme();

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleMobile = () => {
      window.innerWidth > 640 ? setMobile(false) : setMobile(true);
    };

    window.addEventListener("resize", handleMobile);

    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  });

  return (
    <header className="px-4 max-w-2xl m-auto py-6 flex items-center space-x-4 absolute w-full left-0 right-0">
      <section className="flex items-center flex-1">
        <h1 className="font-bold text-xl flex-1">
          {mobile ? ".ovct" : "Octavio Cossy Torquati"}
        </h1>
        <nav className="hidden sm:block">
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
            <li>
              <Link
                href={"https://github.com/Octaviocossy/portfolio_2023"}
                target={"_blank"}
                className="flex items-center"
              >
                <GitHub className="mr-1" />
                Source
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="flex">
        <Button
          onClick={handleTheme}
          className="bg-gray-700 hover:bg-gray-800 dark:bg-yellow-500 dark:border-yellow-800 dark:hover:bg-yellow-600"
        >
          {theme === "light" ? (
            <MoonIcon className="w-4 h-4 text-white" />
          ) : (
            <SunIcon className="w-4 h-4 text-white" />
          )}
        </Button>
        <Button
          onClick={() => console.log("testing")}
          className="ml-4 block sm:hidden"
        >
          <Bars3Icon className="w-4 h-4 text-gray-800 dark:text-white" />
        </Button>
      </section>
    </header>
  );
};

export default Navbar;