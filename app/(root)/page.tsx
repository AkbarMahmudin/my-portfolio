import { Hero } from "./_sections/hero";
import Story from "./_sections/story";
import Skills from "./_sections/skills";
import Projects from "./_sections/projects";
import Contact from "./_sections/contact";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      <Hero />
      <Story />
      <Skills />
      <Projects />
      <Contact />

      <footer className="relative">
        <p className="mx-auto w-fit p-2 bg-background text-white">
          &copy; 2024 - All rights reserved
        </p>
        <Separator className="bg-primary absolute top-1/2 left-0 -translate-y-1/2 -z-10" />
      </footer>
    </>
  )
}

export default Home