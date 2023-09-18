"use client";

import { MoonIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

import { ERoutes } from "@/models";
import { Button, Container, Link } from "@/ui";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Container className="py-8 flex items-center space-x-4">
      <h1 className="font-bold text-xl flex-1">Octavio Cossy Torquati</h1>
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
      <Button>
        <MoonIcon className="w-4 h-4 text-gray-700" />
      </Button>
    </Container>
  );
};

export default Navbar;
