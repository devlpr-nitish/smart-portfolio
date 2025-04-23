"use client";

import { ProjectCoverText } from "@/components/CoverText";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from "@/lib/data";
import { ProjectTypes } from "@/lib/types";


const Page = () => {
    return (

        <div className="min-h-screen mb-20 mt-20" >
            <div className="mb-20">
                <ProjectCoverText />
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {projectData.map((project: ProjectTypes, index: number) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

        </div>
    );
};

export default Page;
