import Image from "next/image";
import { Header } from "@/src/sections/Header";
import { HeroSection } from "@/src/sections/Hero";
import { ProjectsSection } from "@/src/sections/Projects";

export default function Home() {
  return <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </div>;
}
