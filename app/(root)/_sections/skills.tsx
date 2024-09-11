import { Separator } from "@/components/ui/separator";

import { Heading } from "../_components/heading";
import { logo } from "@/constants";
import { SkillItem } from "../_components/skill-item";
import { certifications } from "@/_mock";
import { SkillCertificateItem } from "../_components/skill-certificate-item";

const Skills = () => {
  return (
    <section data-section id="skills" className="text-white bg-background relative py-6">
      <Heading title="Skills" className="mb-16" />

      <div className="pb-6">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll-reverse">
            {certifications.map((item) => (
              <SkillCertificateItem {...item} key={item.name} />
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll-reverse">
            {certifications.map((item) => (
              <SkillCertificateItem {...item} key={item.name} />
            ))}
          </ul>

        </div>

        <Separator className="md:h-0.5 h-2 bg-primary" />

        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {logo.map((logo) => (
              <SkillItem logo={logo} key={logo.name} />
            ))}
          </div>
          <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
            {logo.map((logo) => (
              <SkillItem logo={logo} key={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
