"use client";

import { AdminSearch } from '@/components/AdminSearch'
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { Project, ProjectCardProps, ProjectTypes } from '@/lib/types';
import { Delete, DeleteIcon, EditIcon, Link2, Plus, SquareArrowOutUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";


const page = () => {
    const router = useRouter();

    const addProject = () => {
        router.push(`/admin/new-project`);
    };
    return (
        <>
            <div className="h-20 flex items-center justify-between bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">

                <div className="flex gap-2 px-10">
                    <span>{20}</span>
                    <span>Total, <span className='opacity-50'>items</span></span>
                </div>

                <div className="">
                    <button onClick={addProject} className='flex gap-2 items-center justify-center py-2 px-4 rounded-md cursor-pointer border border/50'>
                        <span>
                            <Plus />
                        </span>
                        <span className='opacity-50'>
                            Add Project
                        </span>
                    </button>
                </div>


                <div className="px-10">
                    <AdminSearch />
                </div>

            </div>

            <div className="min-h-[650px] overflow-y-scroll p-2 bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 scrollbar-none">
                {projects.map((project: Project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

        </>
    )
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project }: { project: Project }) => {
    const router = useRouter();
    const [projects, setProjects] = useState<Project[]>();

    const deleteProject = (id: string) => {
        setProjects(projects?.filter(project => project.id !== id));
    }

    const editProject = (id: string) => {
        router.push(`/admin/edit/${id}`);
    };


    return (
        <div className="flex justify-between bg-gray-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md rounded-md overflow-hidden mb-4">
            <div className="flex gap-2 justify-center items-center px-6 py-2">
                <span className='text-center'>
                    <h2 className="text-xl text-center font-semibold">{project.title}</h2>
                </span>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                >
                    <Link2 className='cursor-pointer hover:text-blue-300' />
                </a>
            </div>

            <div className="flex flex-row justify-center items-center p-4 gap-4">
                <span
                    onClick={() => editProject(project.id)}
                    className="cursor-pointer"
                >
                    <EditIcon className='cursor-pointer hover:text-yellow-300' />
                </span>
                <span
                    onClick={() => deleteProject(project.id)}
                    className="cursor-pointer"
                >
                    <MdDelete className='text-3xl text-red-600 hover:text-red-400 ' />
                </span>
            </div>
        </div>
    );
};


export default page