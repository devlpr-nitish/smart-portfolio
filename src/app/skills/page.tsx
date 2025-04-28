"use client";
import { SkillsCoverText } from '@/components/CoverText';
import { IconHub } from '@/components/IconHub';
import { MovingSkills } from '@/components/MovingSkills';
import { SkillsButton } from '@/components/SkillsButton';
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaDatabase, FaDocker, FaAws, FaLinux, FaJira, FaJava, FaRust } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiNextdotjs, SiGit, SiKubernetes, SiPostgresql, SiGraphql, SiNginx, SiCplusplus } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

const frontend = [
  { label: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { label: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
  { label: 'CSS', icon: <FaCss3 className="text-[#1572B6]" /> },
  { label: 'JS/TS', icon: <SiTypescript className="text-[#3178C6]" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-[#000000]" /> },
  { label: 'Tailwind', icon: <RiTailwindCssFill className="text-[#38BDF8]" /> },
  { label: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" /> },

];

const backend = [
  { label: 'Node.js', icon: <FaNodeJs className="text-[#8CC84B]" /> },
  { label: 'Express', icon: <SiExpress className="text-[#000000]" /> },
  { label: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { label: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
  { label: 'DB Design', icon: <FaDatabase className="text-[#F4A261]" /> },
  { label: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" /> },
];

const others = [
  { label: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
  { label: 'K8s', icon: <SiKubernetes className="text-[#326CE5]" /> },
  { label: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
  { label: 'CI/CD', icon: <SiGit className="text-[#F1502F]" /> },
  { label: 'Nginx', icon: <SiNginx className="text-[#009639]" /> },
  { label: 'Linux', icon: <FaLinux className="text-[#FCC624]" /> },
  { label: 'Git', icon: <SiGit className="text-[#F1502F]" /> },
  { label: 'Jira', icon: <FaJira className="text-[#0052CC]" /> },
  { label: 'Java', icon: <FaJava className="text-[#F8981D]" /> },
  { label: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
  { label: 'Rust', icon: <FaRust className="text-[#000000]" /> },

];


export const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Skill = () => {
  return (
    <div className="relative min-h-screen mt-10 overflow-hidden">
      <div className="relative z-10 mb-4 md:mb-20">
        <SkillsCoverText />
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full gap-10 justify-between z-10">
        <div className="flex flex-col md:gap-6 gap-10 md:w-1/2 p-6 justify-center items-center">
          {[frontend, backend, others].map((skillGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={containerVariant}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-evenly md:justify-start gap-2 border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.36)] transform trasition ease-in duration-100 rounded-2xl p-4 md:py-6 md:px-10 shadow-lg"
            >
              {skillGroup.map((skill, idx) => (
                <motion.div key={idx} variants={itemVariant}>
                  <SkillsButton icon={skill.icon} label={skill.label} />
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
  );
};

export default Skill;
