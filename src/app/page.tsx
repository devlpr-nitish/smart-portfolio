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
import { useRef } from "react";
import { toast } from "sonner";

export default function Home() {
  const ref = useRef<HTMLSpanElement | null>(null);

  const copyEmail = () => {
    if (ref.current) {
      navigator.clipboard.writeText(ref.current.textContent || "")
        .then(() => {
          toast("email copied");
        }).catch((err) => {
          toast("Failed to copy email");
        })
    }

  }

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
              <motion.span
                onClick={copyEmail}
                className="flex md:gap-2 justify-center items-center cursor-pointer px-2 z-10"
                whileHover={{ scale: 1.05, color: "#FF6347" }} 
              >
                <motion.div
                  whileTap={{ scale: 1.02 }} 
                  className="p-1 md:p-0"
                >
                  <Copy />
                </motion.div>

                <motion.span
                  ref={ref}
                  className="text-sm md:text-md transition-colors duration-100"
                  transition={{ type: "spring", stiffness: 300 }} 
                >
                  devlprnitish@gmail.com
                </motion.span>
              </motion.span>
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
      <Skill />



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
