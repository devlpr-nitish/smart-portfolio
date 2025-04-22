
import { CustomStyleUnderlineText } from "@/components/UnderlineText";
import { SparkText } from "../components/SparkText";
import { SquaresBg } from "../components/SquarsBg";
import { ConnectButton } from "../components/ConnectButton";
import Link from "next/link";
import { Copy } from "lucide-react";
import { ExperienceCoverText, ProjectCoverText, SkillsCoverText } from "../components/CoverText";
import { Beam } from "../components/Beam";
import { ProjectCard } from "../components/ProjectCard";
import { projectData } from "@/lib/data";
import { ProjectTypes } from "@/lib/types";
import { IconHub } from "@/components/IconHub";
import { SkillsButton } from "@/components/SkillsButton";
import { FaReact } from "react-icons/fa";
import { MovingSkills } from "@/components/MovingSkills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-screen">
        <div className="absolute">
          <SquaresBg />
        </div>

        <div className="relative z-10 h-full flex flex-col gap-10 px-20 py-40 items-center">
          <span className="flex gap-2 items-end">
            <span>
              <p className="text-lg text-white">Hello, I'm</p>
              <SparkText />
            </span>
            <span className="flex gap-2 ">
              <span className="text-lg text-white">a</span>
              <span className="text-lg text-white">
                <CustomStyleUnderlineText />
              </span>
            </span>
          </span>

          <div className="px-32">
            <p className="text-md text-center text-[#d1d1d1]"> I build everything from sleek <b className="text-[#045F77]">user interfaces</b> to powerful backend systems. I ensure seamless <b className="text-[#045F77]">integration</b> between frontend and backend to deliver smooth, <b className="text-[#045F77]">scalable</b> web experiences.</p>
          </div>

          <div className="flex justify-center  gap-4 items-center">
            <Link href="connect">
              <ConnectButton />
            </Link>

            <div className="text-[#d3d3d3]">
              <span className="flex gap-2 justify-center cursor-pointer p-2 z-10">
                <Copy />
                <span className="">devlprnitish@gmail.com</span>
              </span>
            </div>
          </div>
          <Beam />
        </div>
      </div>

      {/* projects section */}
      <div className="min-h-screen">
        <div className="mb-20">
          <ProjectCoverText />
        </div>


        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projectData.map((project: ProjectTypes, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>

      {/* skills section */}
      <div className="relative min-h-screen mt-10 overflow-hidden">

        <div className="relative z-10 mb-20">
          <SkillsCoverText />
        </div>

        <div className="flex flex-row w-full gap-10 justify-between z-10">
          <div className="flex flex-col gap-6 w-1/2 p-6 justify-center items-center">
            <div className="flex flex-wrap gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl py-6 px-10">
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            </div>

            <div className="flex flex-wrap gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl py-6 px-10">
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            </div>

            <div className="flex flex-wrap gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl py-6 px-10">
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
              <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            </div>

          </div>
          <div className="w-1/2 z-10">
            <IconHub />
          </div>


          <div className="absolute -bottom-96 top-28 inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="absolute -rotate-[90deg]">
              <MovingSkills />
            </div>
          </div>

        </div>
      </div>  


      <div className="min-h-screen relative z-10 mt-20">
        <div className="mb-20">
          <ExperienceCoverText />
        </div>

        <div className="">
          <ExperienceTimeline/>
        </div>
      </div>

    </>
  );
}
