import { SkillsCoverText } from '@/components/CoverText'
import { IconHub } from '@/components/IconHub'
import { MovingSkills } from '@/components/MovingSkills'
import { SkillsButton } from '@/components/SkillsButton'
import React from 'react'
import { FaReact } from 'react-icons/fa'

const page = () => {
  return (
    <div className="relative min-h-screen mt-20 overflow-hidden">

      <div className="relative z-10 mb-20">
        <SkillsCoverText />
      </div>

      <div className="flex flex-row w-full gap-10 justify-between z-10">
        <div className="flex flex-col gap-6 w-1/2 p-6 justify-center items-center">
          <div className="flex flex-wrap gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl py-6 px-10">
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
          </div>

          <div className="flex flex-wrap gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl py-6 px-10">
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
          </div>

          <div className="flex flex-wrap gap-2 border border-[rgba(255,255,255,0.10)] rounded-2xl py-6 px-10">
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
            <SkillsButton icon={<FaReact className="text-blue-600 text-2xl" />} label={"ReactJs"} />
          </div>

        </div>
        <div className="w-1/2 z-10">
          <IconHub />
        </div>


        <div className="absolute -bottom-96 top-28 inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="absolute -rotate-[90deg]">
            <MovingSkills />
          </div>
        </div>

      </div>
    </div>
  )
}

export default page