"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const MenuItem = ({ name, link }: { name: string; link: string }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sections = useRef<HTMLElement[]>([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = Array.from(
      document.querySelectorAll("[data-section]")
    ) as HTMLElement[];
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <li
      className={cn(
        "text-lg font-light text-white hover:text-primary transition list-none",
        activeSection === name.toLocaleLowerCase()
          ? "text-primary font-semibold"
          : "text-white font-normal"
      )}
    >
      <Link
        href={link}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById(name.toLocaleLowerCase());
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {name}
      </Link>
    </li>
  );
};
