import { AdminSearch } from '@/components/AdminSearch'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="h-20 flex items-center justify-between bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">

                <div className="flex gap-2 px-10">
                    <span>{20}</span>
                    <span>Total, <span className='opacity-50'>items</span></span>
                </div>


                <div className="px-10">
                    <AdminSearch />
                </div>

            </div>
            <div className="min-h-[650px] bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700">

                <div className="">
                    <div className="">
                        <span>Frontend</span>
                    </div>

                    
                </div>

                <div className="">
                    <div className="">
                        <span>Backend</span>
                    </div>
                </div>


                <div className="">
                    <div className="">
                        <span>Others</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page