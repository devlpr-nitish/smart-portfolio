"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { SkillsButton } from "./SkillsButton";
import { FaReact } from "react-icons/fa";

export function ExperienceTimeline() {
    const data = [
        {
            title: (
                <div>
                    <div className="">
                        <span className="text-gray-400">APR 2024 - APR 2025</span>
                    </div>

                    <div>
                        <span className="text-xl text-gray-100 font-bold">
                            Campus Ambassador
                        </span>
                    </div>

                    <div className="">
                        <span className="text-gray-400">GeeksforGeeks</span>
                    </div>
                </div>
            ),
            content: (
                <div>
                    <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 flex flex-col gap-2">
                        <li className="flex gap-2 items-center">
                            <span className="mt-1 text-green-500">✔️</span>
                            <span>Promotion: Organize workshops, seminars, and events to raise awareness about GeeksforGeeks.</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span className="mt-1 text-blue-500">📝</span>
                            <span>Content Creation: Contribute articles, tutorials, and problem solutions to the platform.</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span className="mt-1 text-yellow-500">🤝</span>
                            <span>Mentorship: Guide fellow students in their learning journeys and provide support.</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span className="mt-1 text-purple-500">💬</span>
                            <span>Feedback Collection: Gather insights from peers to help improve GeeksforGeeks offerings.</span>
                        </li>
                    </ul>

                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/gfgprofile.png"
                            alt="gfg profile"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="/gfgprofile.png"
                            alt="gfg profile"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                    <div className="mt-4 w-full flex flex-wrap gap-2">
                        <SkillsButton  label={"Leadership"}/>
                        <SkillsButton  label={"Communication"}/>
                        <SkillsButton  label={"Networking"}/>
                    </div>
                </div>
            ),
        },

    ];
    return (
        <div className="min-h-screen w-full">
            <div className="absolute md:top-6 md:left-0 w-full">
                <Timeline data={data} />
            </div>
        </div>
    );
}
