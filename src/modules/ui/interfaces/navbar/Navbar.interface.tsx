"use client";

import { Button, Dropdown, GitHub, INavItem, Link } from "@/ui";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ERoutes } from "@/models";
import { useTheme } from "@/hooks";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, handleTheme } = useTheme();

  const [mobile, setMobile] = useState(!Boolean(window.innerWidth > 640));

  const NAV_ITEMS: INavItem[] = [
    {
      name: "Inicio",
      href: ERoutes.HOME,
      isCurrent: pathname === ERoutes.HOME,
    },
    { name: "Posts", href: ERoutes.POSTS, isCurrent: pathname === ERoutes.POSTS },
    {
      target: "_blank",
      name: "Source",
      href: "https://github.com/Octaviocossy/portfolio_2023",
      icon: <GitHub className="mr-1" />,
    },
  ];

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
    <header
      className="px-4 max-w-xl m-auto py-6 flex items-center space-x-4 fixed w-full top-0 left-0 right-0"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <section className="flex items-center flex-1">
        <h1 className="font-bold text-xl flex-1">
          {mobile ? ".ovct" : "Octavio Cossy Torquati"}
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex space-x-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target={item.target}
                  isCurrent={item.isCurrent}
                  className="flex items-center"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex">
        <Button
          onClick={handleTheme}
          className="bg-gray-700 border-gray-600 hover:bg-gray-800 dark:bg-yellow-500 dark:border-yellow-400 hover:dark:bg-yellow-600"
        >
          {theme === "light" ? (
            <MoonIcon className="w-4 h-4 text-white" />
          ) : (
            <SunIcon className="w-4 h-4 text-white" />
          )}
        </Button>
        <Dropdown
          className="ml-2 block sm:hidden"
          items={NAV_ITEMS}
          icon={<Bars3Icon className="w-4 h-4 text-gray-800 dark:text-white" />}
        />
      </section>
    </header>
  );
};

export default Navbar;
