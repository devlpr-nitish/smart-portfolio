"use client";
import { AdminSearch } from '@/components/AdminSearch';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from 'react-icons/md'

const page = () => {
    const router = useRouter();

    const addSkill = () => {
        router.push(`/admin/new-skill`);
    };

    return (
        <>
            <div className="h-20 flex items-center justify-between bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">

                <div className="flex gap-2 px-10">
                    <span>{20}</span>
                    <span>Total, <span className='opacity-50'>items</span></span>
                </div>

                <div className="">
                    <button onClick={addSkill} className='flex gap-2 items-center justify-center py-2 px-4 rounded-md cursor-pointer border border/50'>
                        <span>
                            <Plus />
                        </span>
                        <span className='opacity-50'>
                            Add Skill
                        </span>
                    </button>
                </div>


                <div className="px-10">
                    <AdminSearch />
                </div>

            </div>
            <div className="min-h-[650px] overflow-y-scroll bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">

                <div className="p-2">
                    <div className="px-6 py-4">
                        <span>Frontend</span>
                    </div>

                    <div className="px-6 py-4 flex gap-4 flex-col">
                        {skills.map((skill) => (
                            (skill.type == "frontend") ? <SkillsCard skill={skill.name} /> : null
                        ))}
                    </div>


                </div>

                <div className="p-2">
                    <div className="px-6 py-4">
                        <span>Backend</span>
                    </div>

                    <div className="px-6 py-4 flex gap-4 flex-col">
                        {skills.map((skill) => (
                            (skill.type == "backend") ? <SkillsCard skill={skill.name} /> : null
                        ))}
                    </div>
                </div>


                <div className="p-2">
                    <div className="px-6 py-4">
                        <span>Others</span>
                    </div>

                    <div className="px-6 py-4 flex gap-4 flex-col">
                        {skills.map((skill) => (
                            (skill.type == "others") ? <SkillsCard skill={skill.name} /> : null
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

let skills = [
    { name: "React", type: "frontend" },
    { name: "HTML", type: "frontend" },
    { name: "Tailwind", type: "frontend" },
    { name: "Express", type: "backend" },
    { name: "Node", type: "backend" },
    { name: "Next", type: "backend" },
    { name: "Next", type: "frontend" },
    { name: "MongoDB", type: "others" },
    { name: "Postgresql", type: "others" },
    { name: "Sql", type: "others" },
]

function SkillsCard({ skill }: { skill: string }) {
    return (
        <div className="flex gap-4 items-center">
            <div className="">
                <span>{skill}</span>
            </div>
            <div className=" cursor-pointer">
                <MdDelete className='text-2xl text-red-600 hover:text-red-400 ' />
            </div>
        </div>
    )
}

export default page