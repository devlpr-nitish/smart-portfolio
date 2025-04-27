"use client";
import { AdminSearch } from '@/components/AdminSearch'
import { EditIcon, Link2, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';

const page = () => {
    const router = useRouter();

    const addBlog = () => {
        router.push(`/admin/new-blog`);
    };

    return (
        <>
            <div className="h-20 flex items-center justify-between bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">

                <div className="flex gap-2 px-10">
                    <span>{20}</span>
                    <span>Total, <span className='opacity-50'>items</span></span>
                </div>

                <div className="">
                    <button onClick={addBlog} className='flex gap-2 items-center justify-center py-2 px-4 rounded-md cursor-pointer border border/50'>
                        <span>
                            <Plus />
                        </span>
                        <span className='opacity-50'>
                            Add Blog
                        </span>
                    </button>
                </div>

                <div className="px-10">
                    <AdminSearch />
                </div>

            </div>

            <div className="min-h-[650px] overflow-y-scroll p-2 bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 scrollbar-none">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </>
    )
}



const BlogCard = () => {
    const router = useRouter();
    const [blogs, setBlogs] = useState();

    const deleteBlog = (id: string) => {
        // setBlogs(blogs?.filter(blog => blog.id !== id));
    }

    const editBlog = (id: string) => {
        router.push(`/admin/edit-blog/${id}`);
    };


    return (
        <div className="flex justify-between bg-gray-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md rounded-md overflow-hidden mb-4">
            <div className="flex gap-2 justify-center items-center px-6 py-2">
                <span className='text-center'>
                    <h2 className="text-xl text-center font-semibold">Blog Title</h2>
                </span>
            </div>

            <div className="flex flex-row justify-center items-center p-4 gap-4">
                <span
                    onClick={() => editBlog("cds")}
                    className="cursor-pointer"
                >
                    <EditIcon className='cursor-pointer hover:text-yellow-300' />
                </span>
                <span
                    // onClick={() => deleteProject(project.id)}
                    className="cursor-pointer"
                >
                    <MdDelete className='text-3xl text-red-600 hover:text-red-400 ' />
                </span>
            </div>
        </div>
    );
};

export default page