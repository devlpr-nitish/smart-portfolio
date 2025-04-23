"use client";
import { SkillsCoverText } from '@/components/CoverText'
import { IconHub } from '@/components/IconHub'
import { MovingSkills } from '@/components/MovingSkills'
import { SkillsButton } from '@/components/SkillsButton'
import React from 'react'
import { FaReact } from 'react-icons/fa';
import { motion } from "framer-motion";

export const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export  const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};


const page = () => {
  


  return (
    <div className="relative min-h-screen mt-10 overflow-hidden">

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

    </div>
  )
}

export default page;