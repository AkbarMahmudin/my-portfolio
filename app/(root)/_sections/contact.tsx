import Image from "next/image";

import { images } from "@/constants";
import { socialMedia } from "@/copywrite/social-media";

import { buttonVariants } from "@/components/ui/button";
import { IconLink } from "../_components/icon-link";
import Link from "next/link";

const Contact = () => (
  <section data-section id="contact" className="text-white px-12 md:pt-24 pt-12 w-full">
    <div className="bg-primary w-full rounded grid md:grid-cols-4 grid-cols-1 justify-center items-center">
      <div className="md:block hidden relative h-full">
        <Image
          src={images.bueno}
          alt="Contact me"
          width={400}
          height={400}
          className="absolute bottom-0"
        />
      </div>

      <div className="flex flex-col items-center gap-4 col-span-2 text-background md:py-12 py-8 md:px-0 px-8">
        <h2 className="font-museo md:text-6xl text-4xl font-bold">
          Contact me
        </h2>
        <p className="md:text-lg text-base md:w-3/5 mx-auto text-justify">
          Whether you have a question, a project in mind, or just want to say
          hello, I&apos;d love to hear from you!
        </p>
        <Link
          href="mailto:akbarmahmudin7@gmail.com?subject=Interested in Your Work - Let's Connect!"
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "bg-primary border-2 border-black md:text-lg text-base font-semibold my-3 md:w-1/2 w-full"
          })}
          style={{
            border: "2px solid #000",
          }}
        >
          Get In Touch
        </Link>
      </div>

      <div className="md:block hidden relative h-full">
        <Image
          src={images.looking}
          alt="Contact me"
          width={400}
          height={400}
          className="absolute bottom-0"
        />
      </div>
    </div>

    <div className="flex gap-x-3 mx-auto my-8 w-full justify-center">
      {socialMedia.map((item, index) => (
        <IconLink
          key={index}
          icon={item.icon}
          url={item.url}
          tooltip={item.text}
        />
      ))}
    </div>
  </section>
);

export default Contact;
