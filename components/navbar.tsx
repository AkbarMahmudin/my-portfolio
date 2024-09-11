"use client";

import { MenuItem } from "./menu-item"
import { MobileMenu } from "./mobile-menu"

interface NavbarProps {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}

const Navbar = ({
  navItems,
}: NavbarProps) => {
  return (
    <nav className="text-white flex md:items-center md:justify-center fixed md:relative w-full z-50">
      <ul className="md:flex hidden justify-between w-[500px] py-8">
        {navItems.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </ul>

      <div className="flex md:hidden">
        <MobileMenu items={navItems} />
      </div>
    </nav>
  )
}

export default Navbar
