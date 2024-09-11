import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

interface SkillItemProps {
  logo: {
    name: string;
    url: string;
  };
}

export const SkillItem = ({ logo }: SkillItemProps) => {
  return (
    <div
      className="group flex flex-col gap-1 items-center max-w-none mx-8 my-8 transition-all"
      key={logo.name}
    >
      <Separator
        orientation="vertical"
        className="bg-white/10 group-hover:bg-primary/20 h-6 w-0.5 rounded-full"
      />

      <div className="flex items-center justify-center p-4 bg-background border-2 border-white/10 group-hover:border-primary/20 rounded-sm h-24 w-24">
        <Image
          src={logo.url}
          alt={logo.name}
          width={50}
          height={50}
          loading="lazy"
          className="grayscale group-hover:grayscale-0 object-contain"
        />
      </div>

      <figcaption>
        <span className="text-sm text-white/80">{logo.name}</span>
      </figcaption>
    </div>
  );
};
