import Image from "next/image";
import {HeroSection} from "@/components/sections/HeroSection";
import {ProfileSection} from "@/components/sections/ProfileSection";
import {AttributesSection} from "@/components/sections/AttributesSection";
import {FablesSection} from "@/components/sections/FablesSection";
import {ScenarioSection} from "@/components/sections/ScenarioSection";
import {ContactSection} from "@/components/sections/ContactSection";
import * as incarnation from "@/_mock/incarnation.json";
import apiUrl from '@/configs/api';
import {Profile} from "@/interfaces/profile";
import {Cta} from "@/interfaces/cta";
import {Stigma} from "@/interfaces/stigma";
import {Attribute} from "@/interfaces/attribute";
import {Scenario} from "@/interfaces/scenario";

interface IResponse extends Profile {
  // profile: Profile;
  ctas: Cta[];
  contacts: Cta[];
  stigmas: Stigma[];
  attributes: Attribute[];
  scenarios: Scenario[];
}

async function getIncarnation() {
  const req = await fetch(apiUrl.incarnation);

  if (!req.ok) {
    return JSON.parse(JSON.stringify(incarnation)) as IResponse;
  }

  const res = await req.json();

  return res.data as IResponse;
}

export default async function Home() {
  const {contacts = [], stigmas = [], attributes = [], ctas = [], scenarios = [], ...profile} = await getIncarnation();

  return (
    <main>
      <HeroSection profile={profile} ctas={ctas}/>
      <ProfileSection profile={profile} />
      <AttributesSection attributes={attributes} stigmas={stigmas}/>
      <FablesSection/>
      <ScenarioSection scenarios={scenarios}/>
      <ContactSection contacts={contacts}/>
    </main>
  );
}
