"use client";
import { Blogs } from '@/components/Blogs';
import { BlogsCoverText } from '@/components/CoverText';

const page = () => {
    return (
        <div className="min-h-screen mb-20 mt-20" >
            <div className="md:mb-20 mb-4">
                <BlogsCoverText />
            </div>

            <div className="">
                <Blogs/>
            </div>

        </div>
    )
}

export default page