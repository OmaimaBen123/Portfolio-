import darkSaasLandingPage from "@/src/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/src/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/src/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from '@/src/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/src/assets/icons/arrow-up-right.svg'

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" }
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" }
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" }
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage
  }
];

export const ProjectsSection = () => {
  return <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Real-world Results
        </p>
      </div>
      <h2 className="text-3xl font-serif text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-white/60 mt-4 text-center">
        See how I transformed concepts into engaging digital experiences
      </p>
      <div className="flex flex-col mt-10 ">
        {portfolioProjects.map(project =>
          <div
            key={project.title}
            className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:z-10 after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8"
          >
            <div className="flex">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span className="text-gray-800 font-medium">
                  {project.company}
                </span>
                <span className="text-gray-500 text-sm">
                  {project.year}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-serif mt-2 text-gray-900 mb-2">
              {project.title}
            </h3>

            <ul className="flex flex-col gap-4 mt-4 ">
              {project.results.map(result =>
                <li className="flex gap-2 text-sm text-white/50 mt-4">
                  <CheckIcon className="size-5" />
                  <span>
                    {result.title}
                  </span>
                </li>
              )}
            </ul>
            <a href={project.link}>
              <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>View Live Site</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
            <Image src={project.image} alt={project.title} className="mt-8" />
          </div>
        )}
      </div>
    </div>;
};
