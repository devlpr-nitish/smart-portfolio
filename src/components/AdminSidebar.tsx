"use client";
import React, { useState } from "react";
import {  LogOut, Cpu, BookCheck, FolderKanban } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function AdminSidebar({ children }: { children: React.ReactNode }) {

    const links = [
        {
            label: "Projects",
            href: "/admin/projects",
            icon: (
                <FolderKanban className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Skills",
            href: "/admin/skills",
            icon: (
                <Cpu className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Blogs",
            href: "/admin/blogs",
            icon: (
                <BookCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Logout",
            href: "/admin/logout",
            icon: ( 
                <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);

    const pathname = usePathname();
    return (
        <div
            className={cn(
                "flex flex-col gap-4 justify-between md:flex-row w-full max-w-7xl mx-auto overflow-hidden",
                "h-[80vh]"
            )}
        >

            <div className="w-1/4 bg-gray-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 ">
                <div className="flex gap-2 items-center py-6 px-8 border-b">
                    <span>
                        <img src="/nitish.jpeg" alt="Logo" className="h-10 w-auto rounded-full" />
                    </span>
                    <span className="">
                        <span className="text-gray-200 font-bold">Nitish</span>
                    </span>
                </div>

                <div className="w-full flex flex-col justify-center">
                    <div className="py-4 px-6">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="z-10">
                                <div className={cn(
                                        "flex gap-2 rounded-md items-center px-4 py-4 hover:bg-gray-600/30",
                                        pathname === link.href ? "bg-gray-600/20" : ""
                                    )}>
                                    <span>
                                        {link.icon}
                                    </span>

                                    <span>
                                        {link.label}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-3/4 flex gap-4 flex-col ">
                {children}
            </div>


        </div>
    );
}

