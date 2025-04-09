"use client";

import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import ProjectCard from './ProjectCard';


const menu: string[] = ["All", "Full Stack", "Frontend"];
const projects = [
    {
        image: "sharethoughts.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        icons: [<FaReact title='react'/>, <SiExpress title='express'/>, <SiMongodb title='mongoDB'/>],
        LiveUrl: "",
        GithubUrl: "",
    },
    {
        image: "sharethoughts.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        icons: [<FaReact title='react'/>, <SiExpress title='express'/>, <SiMongodb title='mongoDB'/>],
        LiveUrl: "",
        GithubUrl: "",
    },
    {
        image: "sharethoughts.png",
        title: "Share Thoughts",
        desc: "Share your thoughts with your college fellows.",
        icons: [<FaReact title='react'/>, <SiExpress title='express'/>, <SiMongodb title='mongoDB'/>],
        LiveUrl: "",
        GithubUrl: "",
    }
    
]



const Projects = () => {
    const [selectedMenu, setSelectedMenu] = useState("All");


    return (
        <div className='w-full flex flex-col gap-4'>

            <div className='w-full border border-[#27557D]  text-white flex gap-2 justify-between items-center p-2 rounded-sm'>

                {
                    menu.map((m, index) => (
                        <div
                            onClick={(e) => setSelectedMenu(m)}
                            key={index} className={`flex justify-center cursor-pointer py-1 w-1/${menu.length} rounded-sm transition ease-linear ${selectedMenu == m ? "bg-[#1447E6]" : "bg-trasparent"}`}>
                            <span className=''>{m}</span>
                        </div>
                    ))
                }
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    projects.map((p)=>(
                        <ProjectCard image={p.image} title={p.title} desc={p.desc} icons={p.icons} GithubUrl={p.GithubUrl} LiveUrl={p.LiveUrl} />
                    ))
                }
            </div>




        </div>
    )
}

export default Projects