"use client";

import IconButton, { IconTechStackButton } from '@/components/IconButton';
import { GithubIcon, SquareArrowOutUpRight } from 'lucide-react';
import React, { ReactElement, useRef } from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import { Bangers } from 'next/font/google';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bangers',
});



export type TechStack = {
    icon: ReactElement;
    label: string;
};

export type Project = {
    image: string;
    title: string;
    desc: string;
    stack: TechStack[];
    LiveUrl: string;
    GithubUrl: string;
};

const projects: Project[] = [
    {
        image: "sharethoughts.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        stack: [
            { icon: <FaReact className="text-cyan-300" />, label: "React" },
            { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
            { icon: <RiTailwindCssFill className="text-cyan-500" />, label: "Tailwind CSS" },
            { icon: <FaNodeJs className="text-green-600" />, label: "NodeJS" },
            { icon: <SiExpress className="text-slate-300" />, label: "ExpressJS" },
            { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" }
        ],
        LiveUrl: "#",
        GithubUrl: "#"
    },
    {
        image: "webquery.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        stack: [
            { icon: <FaReact className="text-cyan-300" />, label: "React" },
            { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
            { icon: <RiTailwindCssFill className="text-cyan-500" />, label: "Tailwind CSS" },
            { icon: <FaNodeJs className="text-green-600" />, label: "NodeJS" },
            { icon: <SiExpress className="text-slate-300" />, label: "ExpressJS" },
            { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" }
        ],
        LiveUrl: "#",
        GithubUrl: "#"
    }, {
        image: "sharethoughts.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        stack: [
            { icon: <FaReact className="text-cyan-300" />, label: "React" },
            { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
            { icon: <RiTailwindCssFill className="text-cyan-500" />, label: "Tailwind CSS" },
            { icon: <FaNodeJs className="text-green-600" />, label: "NodeJS" },
            { icon: <SiExpress className="text-slate-300" />, label: "ExpressJS" },
            { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" }
        ],
        LiveUrl: "#",
        GithubUrl: "#"
    }, {
        image: "sharethoughts.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        stack: [
            { icon: <FaReact className="text-cyan-300" />, label: "React" },
            { icon: <SiTypescript className="text-blue-500" />, label: "TypeScript" },
            { icon: <RiTailwindCssFill className="text-cyan-500" />, label: "Tailwind CSS" },
            { icon: <FaNodeJs className="text-green-600" />, label: "NodeJS" },
            { icon: <SiExpress className="text-slate-300" />, label: "ExpressJS" },
            { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" }
        ],
        LiveUrl: "#",
        GithubUrl: "#"
    },
];

const Page = () => {
    return (
        <div className='w-full min-h-screen py-6 flex flex-col items-center gap-6 overflow-hidden'>
            <motion.div
                className="shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* <h2 className={`${bangers.variable}text-gray-300 font-bold  text-5xl shadow-2xl mb-10 opacity-60`}>MY WORKS</h2> */}
                {/* <TextHoverEffect  text='WORKS'/> */}
            </motion.div>

            {projects.map((project, idx) => {
                const ref = useRef(null);
                const isInView = useInView(ref, {
                    amount: 0.20,
                    once: false,
                });

                return (
                    <div key={idx} ref={ref} className="w-full flex flex-row gap-6 mb-12">
                        <motion.div
                            className="w-2/3 flex flex-col gap-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className='w-full border border-[#1a2129] rounded-4xl p-2'
                                // whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    className="w-full h-[700px] min-h-[700px] flex flex-col gap-4 justify-between cursor-pointer rounded-4xl pt-6 px-12 border border-[#1a2129] bg-gradient-to-br from-[#0b1942] via-[#2563EB] to-[#3B82F6]"
                                >
                                    <motion.div className="w-full h-1/3">
                                        <p className='text-gray-300 text-2xl'>
                                            {project.desc}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="w-full h-3/4 overflow-hidden rounded-2xl rounded-b-none transition duration-300"
                                        whileHover={{ y: -15 }}
                                    >
                                        <motion.img
                                            src={project.image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            <div className="w-full flex flex-col items-center">
                                <div className="w-full text-gray-200 p-2 flex flex-col">
                                    <h2 className='font-bold text-xl'>{project.title}</h2>
                                    <p className='text-gray-400'>{project.desc}</p>
                                </div>
                                <div className="w-full flex items-center gap-2 text-white p-2">
                                    <IconButton icon={<GithubIcon className='h-4' />} label='Source Code' />
                                    <IconButton icon={<SquareArrowOutUpRight className='h-4' />} label='Website' />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-1/3 flex flex-col gap-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-[30px] h-[5px] bg-[#2563EB] ring-2 ring-white" />
                                <h2 className="font-bold text-xl text-gray-300">{project.title}</h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, i: number) => (
                                    <IconTechStackButton key={i} icon={tech.icon} label={tech.label} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
};

export default Page;
