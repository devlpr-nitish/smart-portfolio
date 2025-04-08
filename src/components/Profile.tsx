import { FacebookIcon, GithubIcon, HeartIcon, InstagramIcon, LinkedinIcon, LucideInstagram, TwitterIcon, User2Icon, XIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const Profile = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-4 bg-[#030507] text-gray-300 rounded-md border border-[#27557D]'>
            <div className="w-1/4 h-26 rounded-full">
                <img className='h-full w-full rounded-full' src="nitish.jpeg" alt="Nitish.jpeg" />
            </div>

            <div className="">
                <h2 className='font-bold text-xl'>Nitish Kumar</h2>
            </div>
            <div className="">
                <span className='opacity-90'>Full stack Developer & Devops</span>
            </div>

            <div className="flex gap-2 py-2 items-center justify-center">
                <span className='rounded-full p-2 bg-gray-200 shadow-lg'>
                    <GithubIcon className='text-slate-950' />
                </span>
                <span className='rounded-full p-2 bg-gray-200 shadow-lg'>
                    <TwitterIcon className='text-blue-700' />
                </span>
                <span className='rounded-full p-2 bg-gray-200 shadow-lg'>
                    <InstagramIcon className='text-pink-700' />
                </span>
                <span className='rounded-full p-2 bg-gray-200 shadow-lg'>
                    <LinkedinIcon className='text-blue-800' />
                </span>

            </div>

            <div className="flex gap-4 my-4">
                <div className="">
                    <Button className='text-blue-600 cursor-pointer'>Contact</Button>
                </div>
                <div className="">
                    <Button className='bg-blue-600 cursor-pointer hover:bg-blue-700'>
                        Resume
                    </Button>
                </div>
            </div>

            <div className="flex my-4 gap-4 items-center justify-center">
                <div title='users visited' className='flex items-center justify-center gap-2 '>
                    <User2Icon className='text-blue-700' />
                    <span>10</span>
                </div>
                <div title='users liked' className='flex items-center justify-center gap-2 border-l-2 border-gray-600 pl-4'>
                    <HeartIcon className='cursor-pointer text-pink-600 hover:text-pink-700'/>
                    <span>10</span>
                </div>
            </div>
        </div>
    )
}

export default Profile