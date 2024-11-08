import memojiImage from '@/src/assets/images/memoji-computer.png';
import Image from 'next/image';
import grainImage from '@/src/assets/images/grain.jpg';
import SparkelIcon from "@/src/assets/icons/star.svg";
import StartIcon from '@/src/assets/icons/star.svg';
import { HeroOrbit } from '../components/HeroOrbit';
export const HeroSection = () => {
  return <div className="p-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
        <div className=" size-[620px] hero-ring" />
        <div className=" size-[820px] hero-ring" />
        <div className=" size-[1020px] hero-ring" />
        <div className=" size-[1220px] hero-ring" />
        <HeroOrbit size={800} rotation={-72}>
          <StartIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StartIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkelIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkelIcon className="size-5 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkelIcon className="size-10 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkelIcon className="size-14 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={620} rotation={-5}>
          <div className="size-2 rounded-full text-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="person peeking from behind laptop" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"> </div>
            <div className="text-sm font-medium">
              Availble for new Projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into
            functional,high-performing web applications,Let's discuss your
            next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3" />
            </svg>
          </button>
          <button className="inline-flex items-center gap-2 border border-white  bg-white text-gray-900 h-12 px-6 rounded-xl ">
            <span>👋</span>
            <span className=" font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>;
};
