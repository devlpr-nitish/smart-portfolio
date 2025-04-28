"use client";

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
import { motion } from "framer-motion";
import Skill, { containerVariant, itemVariant } from "./skills/page";

export default function Home() {


  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-screen no-scrollbar scroll-auto">
        <div className="absolute">
          <SquaresBg />
        </div>

        <div className="relative z-10 h-full flex flex-col md:gap-10 gap-4 md:px-20 md:py-40 px-6 py-40 md:items-center ">
          <span className="flex gap-2 items-end">
            <span>
              <p className="text-lg text-white">Hello, I'm</p>
              <SparkText />
            </span>
            <span className="flex gap-2 ">
              <span className="text-lg text-white">a</span>
              <span className="text-sm md:text-lg text-white">
                <CustomStyleUnderlineText />
              </span>
            </span>
          </span>

          <div className="md:px-32 px-1">
            <p className="md:text-md text-sm md:text-center text-[#d1d1d1]"> I build everything from sleek <b className="text-[#045F77]">user interfaces</b> to powerful backend systems. I ensure seamless <b className="text-[#045F77]">integration</b> between frontend and backend to deliver smooth, <b className="text-[#045F77]">scalable</b> web experiences.</p>
          </div>

          <div className="flex md:flex-row flex-col-reverse justify-center md:gap-8 gap-6 items-center px-2">
            <ConnectButton />

            <div className="text-[#d3d3d3]">
              <span className="flex md:gap-2 justify-center items-center cursor-pointer px-2 z-10">
                <Copy className="p-1 md:p-0" />
                <span className="text-sm md:text-md">devlprnitish@gmail.com</span>
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
      {/* <div className="relative min-h-screen mt-10 overflow-hidden">

        <div className="relative z-10 mb-4 md:mb-20">
          <SkillsCoverText />
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full gap-10 justify-between z-10">

          <div className="flex flex-col md:gap-6 gap-10 md:w-1/2 p-6 justify-center items-center">
            {[1, 2, 3].map((_, groupIdx) => (
              <motion.div
                key={groupIdx}
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-evenly md:justify-start gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl p-4 md:py-6 md:px-10 shadow-lg"
              >
                {[...Array(7)].map((_, idx) => (
                  <motion.div key={idx} variants={itemVariant}>
                    <SkillsButton
                      icon={<FaReact className="text-blue-600 text-2xl" />}
                      label={"ReactJs"}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>


          <div className="md:w-1/2 z-10">
            <IconHub />
          </div>
        </div>


        <div className="absolute hidden md:-bottom-96 md:top-28 inset-0 z-0 md:flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="absolute md:-rotate-[90deg]">
            <MovingSkills />
          </div>
        </div>

      </div> */}
      <Skill/>



      <div className="min-h-screen relative z-10 mt-20">
        <div className="mb-20">
          <ExperienceCoverText />
        </div>

        <div className="flex flex-row justify-center items-center">
          <ExperienceTimeline />
        </div>
      </div>

    </>
  );
}
