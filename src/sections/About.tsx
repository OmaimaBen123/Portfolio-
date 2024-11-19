import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import StartIcon from '@/src/assets/icons/star.svg';
import JsIcon from '@/src/assets/icons/square-js.svg';
import HtmlIcon from '@/src/assets/icons/html5.svg';
import CssIcon from "@/src/assets/icons/css3.svg";
import ReactIcon from "@/src/assets/icons/react.svg";
import ChromeIcon from "@/src/assets/icons/chrome.svg";
import GithubIcon from "@/src/assets/icons/github.svg";
import { TechIcon } from "../components/TechIcon";
import mapImage from '@/src/assets/images/map.png';
import smileEmoji from "@/src/assets/images/memoji-smile.png";
import Image from "next/image";
import { CardHeader } from "../components/CardHeader";
import { Toolbox } from "../components/ToolBox";
import phpIcon from  "@/src/assets/icons/php.svg"
const toolboxItems = [
  {
    title: "javascript",
    iconType: JsIcon
  },
  {
    title: "HTML5",
    iconType: HtmlIcon
  },
  {
    title: "CSS3",
    iconType: CssIcon
  },
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "Chrome",
    iconType: ChromeIcon
  },
  {
    title: "Github",
    iconType: GithubIcon
  },
   {
    title: "PHP",
    iconType: phpIcon 
  },
];
const hobbies = [
  {
    title: 'Music',
    emoji: '🎶',
    left: '5%',
    top:'5%',
  },
   {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top:'5%',
  },
   {
    title: 'Cooking',
    emoji: '👩🏻‍🍳',
    left: '10%',
    top:'35%',
  },
    {
    title: 'Coding',
      emoji: '💻',
    left: '35%',
    top:'35%',
  },
     {
    title: 'Cycling',
      emoji: '🚴🏻‍♀️',
    left: '65%',
    top:'35%',
  },
      {
    title: 'Dancing',
      emoji: '🕺🏻',
    left: '5%',
    top:'65%',
  },
       {
    title: 'Swiming',
      emoji: '🏊🏻‍♀️',
    left: '45%',
    top:'65%',
  },
]
export const AboutSection = () => {
  return <div className="py-20">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am ,What i do and what inspire me ." />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] p-0">
          <CardHeader title="My Toolbox" description=" Explore the technologies and tools I use to craft exceptional
                digital experiences." className="px-6 pt-6"/>
            
          <Toolbox items={toolboxItems} className="mt-6" />
          <Toolbox items={ toolboxItems} className="mt-6" itemWrapperClassname="-translate-x-1/2"/>
          </Card>
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader title="Beyond The Code" description="  Discover my passions and hobbies that extend beyond the digital world.
              ." className="px-6 pt-6"/>
            <div className="relative flex-1">
              {hobbies.map(hobby => <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to sky-400 rounded-full py-1.5 absolute" style={{left:hobby.left,top:hobby.top}}>
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>
                    {hobby.emoji}
                  </span>
                </div>)}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
          <Image src={mapImage} alt="map" className="h-full w-full object-cover" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
            <Image src={smileEmoji} alt="smiling" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>;
  
};
