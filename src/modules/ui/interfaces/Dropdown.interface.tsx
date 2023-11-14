"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { INavItem, Link } from "@/ui";
import { cn } from "@/utilities/tailwind_merge.utility";

interface IProps {
  icon: React.ReactNode;
  items: INavItem[];
  className?: string;
}

const Dropdown: React.FC<IProps> = ({ icon, items, className }) => {
  return (
    <Menu as="div" className={cn("relative inline-block text-left", className)}>
      <div>
        <Menu.Button
          className={`border dark:border-gray-800 shadow-sm p-2 rounded-lg 
          hover:bg-white-hover-custom border-white-border-custom hover:dark:bg-gray-800 transition-colors`}
        >
          {icon}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[10rem] origin-top-right divide-y divide-gray-100 dark:divide-gray-900 rounded-lg bg-white-custom dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col">
            {items.map((item) => (
              <Menu.Item key={item.href}>
                {({ close }) => (
                  <Link
                    onClick={close}
                    href={item.href}
                    target={item.target}
                    className={`flex items-center p-2 px-3`}
                    isCurrent={item.isCurrent}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
