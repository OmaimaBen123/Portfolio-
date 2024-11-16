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
  }
];
const hobbies = [
  {
    title: 'Music',
    emoji:'🎶',
  }
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
        <Card>
          <CardHeader title="Beyond The Code" description="  Explore My interests and hobbies beyond the digital realm.
              ."/>
            <div>
              {hobbies.map(hobby => <div key={hobby.title}>
                  <span>
                    {hobby.title}
                  </span>
                  <span>
                    {hobby.emoji}
                  </span>
                </div>)}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileEmoji} alt="smiling" />
          </Card>
        </div>
      </div>
    </div>;
  
};
