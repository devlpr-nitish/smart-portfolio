import { EyeIcon, GithubIcon } from 'lucide-react'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { RiArrowRightUpLine } from 'react-icons/ri'

interface Cardprops {
    image: string,
    title: string,
    desc: string,
    icons: ReactElement[],
    LiveUrl: string,
    GithubUrl: string,
}

const ProjectCard = ({ image, title, desc, icons, LiveUrl, GithubUrl }: Cardprops) => {
    return (
        <div className='text-white p-4 bg-[#030507] border border-[#27557D] rounded-md w-full'>
            <div>
                <img src={image} alt={title} className='rounded-sm w-full h-48 object-cover' />
            </div>

            <div className="flex justify-between items-center py-2">
                <span className='text-xl font-bold'>{title}</span>

                <div className="flex items-center gap-3">
                    
                    <GithubIcon className="cursor-pointer"/>

                    <EyeIcon className="cursor-pointer text-blue-600" />
                </div>
            </div>

            <p className='text-gray-300 mt-2'>{desc}</p>

            <div className="flex gap-4 flex-wrap items-center mt-4">
                {icons.map((icon, i) => (
                    <div key={i} className='text-2xl text-blue-500'>{icon}</div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;
