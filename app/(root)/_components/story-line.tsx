"use client";
import { images } from "@/constants";
import { cn } from "@/lib/utils";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface StorylineEntry {
  date: string;
  content: React.ReactNode;
  isReverse?: boolean;
}

export const Storyline = ({ data }: { data: StorylineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const dataMapped = data.map((item, index) => {
    if (index % 2 !== 0) {
      item.isReverse = true;
    } else {
      item.isReverse = false;
    }

    return item;
  });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="sticky top-0 z-10 hidden lg:block">
        <Image
          src={images.runner}
          alt="Runner"
          width={500}
          height={500}
          className="py-10 hidden lg:block absolute top-40 left-1/2 -translate-x-1/2"
        />
      </div>

      <div ref={ref} className="relative z-0">
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-background via-primary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        <div className="mx-4 lg:mx-0">
          {dataMapped.map((item, index) => (
            <div
              key={index}
              className={cn("flex justify-start md:justify-between pt-10 md:pt-40 md:gap-10", {
                "flex-row-reverse": item.isReverse,
              })}
            >
              <div className="sticky hidden md:flex flex-col md:flex-row z-40 items-center top-40 self-start w-2/5 lg:max-w-sm md:w-full">
                <h3 className="hidden md:block text-xl md:text-3xl lg:text-5xl font-bold font-museo text-outline text-transparent">
                  {item.date}
                </h3>
              </div>

              <div className="relative w-full lg:w-2/5">
                <h3 className="md:hidden flex text-xl text-primary md:text-2xl mb-4 text-left font-bold font-museo items-center">
                  <CalendarDays size={20} className="inline mr-2 text-background fill-primary" />
                  {item.date}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
