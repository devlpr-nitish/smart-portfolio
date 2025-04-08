import { Boxes, Brackets, ExpandIcon, GraduationCap, NotebookTabs, Projector, Settings, Settings2, UserCheck } from 'lucide-react'
import React from 'react'

const SideNavbar = () => {
  return (
    <div className='w-full p-4 flex flex-col bg-[#030507] text-gray-300 rounded-md border border-[#27557D]'>
        
        <div className="w-full p-4  rounded-md border border-[#27557D] mt-4 flex gap-4  items-center">
            <Boxes/>
            <span className='text-lg font-bold'>Projects</span>
        </div>
        <div className="w-full p-4  rounded-md border border-[#27557D] mt-4 flex gap-4  items-center">
            <NotebookTabs/>
            <span className='text-lg font-bold'>Skills</span>
        </div>
        <div className="w-full p-4  rounded-md border border-[#27557D] mt-4 flex gap-4  items-center">
            <UserCheck/>
            <span className='text-lg font-bold'>Experience</span>
        </div>
        <div className="w-full p-4  rounded-md border border-[#27557D] mt-4 flex gap-4  items-center">
            <GraduationCap/> 
            <span className='text-lg font-bold'>Education</span>
        </div>
        <div className="w-full p-4  rounded-md border border-[#27557D] mt-4 flex gap-4  items-center">
            <Brackets/> 
            <span className='text-lg font-bold'>DSA</span>
        </div>

    </div>
  )
}

export default SideNavbar