import Image from "next/image";

import { works } from "@/_mock";

import { Heading } from "../_components/heading";
import { Storyline } from "../_components/story-line";

const Story = () => {
  const data = works.map((work) => ({
    date: work.date,
    content: (
      <div className="text-white">
        <h3 className="md:text-2xl text-xl font-bold">{work.name}</h3>
        <p className="text-base text-white/80">{work.role}</p>
        {work.description && (
          <div
            className="text-sm my-4 leading-loose"
            dangerouslySetInnerHTML={{ __html: work.description }}
          />
        )}
        {/* {work?.images && (
          <div className="grid grid-cols-3 gap-2">
            {work.images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
              />
            ))}
          </div>
        )} */}
      </div>
    ),
  }));

  return (
    <section
      data-section
      id="story"
      className="w-full h-full text-white relative px-6 py-10 z-0"
    >
      <header className="w-full flex flex-col gap-14 md:px-6 items-start">
        <Heading title="Story" />
        <p className="text-sm md:text-base font-normal pt-2 leading-7">
          I have a strong foundation in Software Engineering built on
          professional experience and a supportive academic background. This
          combination allows me to continue to grow, learn, and make maximum
          contributions in every project I work on.
        </p>
      </header>

      <Storyline data={data} />
    </section>
  );
};

export default Story;
