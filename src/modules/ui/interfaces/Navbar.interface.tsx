"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
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
            <li className="hidden sm:block">
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
      <section className="space-x-4 flex">
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
