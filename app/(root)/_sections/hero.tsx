import Image from "next/image";
import { images } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import { IconLink } from "../_components/icon-link";
import { socialMedia } from "@/copywrite/social-media";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export const Hero = () => {
  const greatingWords = [
    {
      text: "Hi,",
      className: "text-white py-8",
    },
    {
      text: "I'm",
      className: "text-white py-8",
    },
    {
      text: "Akbar",
      className: "text-white py-8",
    },
  ];
  const jobTitles = [
    '"Coder"',
    '"Backend Developer"',
    '"Frontend Developer"',
    '"Fullstack Developer"',
  ];

  return (
    <section
      data-section
      id="home"
      className="h-full lg:h-screen bg-grid-white/5 w-full flex justify-center items-center p-6 relative"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="grid md:grid-cols-3 grid-cols-1 auto-rows-min md:auto-rows-auto text-white h-full gap-x-2 gap-y-8 pt-12 w-full">
        <div className="flex md:justify-end items-center md:items-end md:pb-24 lg:pb-36 w-fit md:w-full relative md:h-[50vh] lg:h-screen">
          <TypewriterEffect
            words={greatingWords}
            className="text-left md:text-right text-white text-[42px] md:text-[60px] lg:text-[90px] font-museo font-normal md:font-bold"
            cursorClassName="bg-primary w-1 md:w-4 h-6 md:h-10 lg:h-14"
          />
        </div>

        <div className="md:flex hidden justify-center items-center relative overflow-y-hidden">
          <Image
            src={images.roboto}
            alt="Roboto"
            width={500}
            height={500}
            className="h-[75%] object-cover animate-bounce transition absolute bottom-0"
          />
        </div>

        <div className="flex flex-col justify-center font-normal gap-y-10 overflow-hidden">
          <div className="md:text-sm text-base text-white/60 font-light">
            jobTitle
            <span className="text-pink-400/60 mx-1">:</span>
            <span className="text-emerald-400/60">{"["}</span>
            <FlipWords
              words={jobTitles}
              className="block text-2xl font-bold pt-2 text-primary w-fit"
            />
            <span className="text-emerald-400/60">{"]"}</span>
          </div>

          <div className="flex gap-x-3 relative">
            {socialMedia.map((item, index) => (
              <IconLink
                key={index}
                icon={item.icon}
                url={item.url}
                tooltip={item.text}
              />
            ))}
          </div>

          <Link
            href="mailto:akbarmahmudin7@gmail.com?subject=Interested in Your Work - Let's Connect!"
            className={buttonVariants({
              size: "lg",
              className:
                "text-background font-normal text-base block md:hidden relative",
            })}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};
