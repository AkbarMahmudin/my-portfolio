import Image from "next/image";
import {HeroSection} from "@/components/sections/HeroSection";
import {ProfileSection} from "@/components/sections/ProfileSection";
import {AttributesSection} from "@/components/sections/AttributesSection";
import {FablesSection} from "@/components/sections/FablesSection";
import {ScenarioSection} from "@/components/sections/ScenarioSection";
import {ContactSection} from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProfileSection />
      <AttributesSection />
      <FablesSection />
      <ScenarioSection />
      <ContactSection />
    </main>
  );
}
