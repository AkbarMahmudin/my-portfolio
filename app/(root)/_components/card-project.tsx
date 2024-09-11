import TooltipCustom from "@/components/tooltip-custom";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { icons } from "@/constants";
import {
  Globe,
  ImageOffIcon,
  Monitor,
  Smartphone,
  PenTool,
  Gamepad,
  Code,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProjectProps {
  name: string;
  category?: string;
  tags: string[];
  description?: string;
  imageUrl: string;
  url: string;
}

const CategoryIcon = ({ category }: { category?: string }) => {
  switch (category) {
    case "web":
      return <Globe size={20} className="text-primary object-cover" />;
    case "mobile":
      return <Smartphone size={20} className="text-primary object-cover" />;
    case "desktop":
      return <Monitor size={20} className="text-primary object-cover" />;
    case "game":
      return <Gamepad size={20} className="text-primary object-cover" />;
    case "design":
      return <PenTool size={20} className="text-primary object-cover" />;
    default:
      return <Code size={20} className="text-primary object-cover" />;
  }
};

export const CardProject = ({
  name,
  category,
  tags,
  description,
  imageUrl,
  url,
}: CardProjectProps) => {
  return (
    <Card className="card_project relative bg-white/10 border-2 border-primary/20 text-white pb-6">
      <CardHeader className="gap-2">

        {/* Title */}
        <CardTitle className="text-2xl font-bold mb-4 flex gap-2 items-center justify-between">
          <div className="text-wrap line-clamp-2 font-museo w-full">{name}</div>
          
          <TooltipCustom description={category!} className="bg-white/10 backdrop-blur border-2 border-background/20 rounded p-2 md:p-3">
            <CategoryIcon category={category?.toLocaleLowerCase()} />
          </TooltipCustom>
        </CardTitle>

        {/* Project Image */}
        <div className="bg-white p-3 rounded-lg aspect-square">
          {imageUrl ? (
            <Image
              src={imageUrl}
              width={400}
              height={200}
              alt="Project 1"
              className="w-full rounded-md object-cover h-full"
            />
          ) : (
            <div className="flex justify-center items-center h-full w-full">
              <ImageOffIcon size={48} className="text-background/20" />
            </div>
          )}
        </div>

        {/* Description */}
        <CardDescription className="text-white space-y-6">
          <span className="line-clamp-3">{description}</span>
          <span className="flex flex-wrap gap-2 text-background/80">
            {tags.map((tag) => (
              <span key={tag} className="block p-1 bg-primary text-xs rounded">
                {tag}
              </span>
            ))}
          </span>
        </CardDescription>
      </CardHeader>

      {/* Anchor Button */}
      <Link
        href={url}
        className={buttonVariants({
          variant: "ghost",
          size: "lg",
          className:
            "absolute lg:w-1/2 bg-white text-black hover:bg-primary shadow-md hover:shadow-lg lg:text-base left-6 -bottom-5",
        })}
      >
        <Image
          src={icons.play}
          alt="Play icon"
          width={28}
          height={28}
          className="mr-2"
        />
        Show Case
      </Link>
    </Card>
  );
};
