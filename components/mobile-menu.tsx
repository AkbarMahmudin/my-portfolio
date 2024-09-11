"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { MenuItem } from "./menu-item";


interface MobileMenuProps {
  items: {
    name: string;
    link: string;
  }[]
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger className="p-6">
        <Menu className="w-8 h-8 text-primary" />
      </SheetTrigger>
      <SheetContent side="left" className="text-white w-1/2">
        <ul className="flex flex-col gap-y-4 mt-6 items-center">
          {items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
