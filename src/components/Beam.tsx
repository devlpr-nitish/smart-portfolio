"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { Database } from "lucide-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function Beam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex min-h-[400px] w-full items-start justify-center overflow-hidden rounded-lg md:px-24 px-1 py-8  md:shadow-xl"
            ref={containerRef}
        >
            <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref}>
                        <Icons.react />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Icons.nodejs />
                    </Circle>

                </div>
                <div className="flex flex-row items-center justify-between">

                    <Circle ref={div3Ref}>
                        <Icons.nextjs />
                    </Circle>
                    <Circle ref={div4Ref}>
                        <img src="nitish.jpeg" alt="nitish" className="rounded-full text-center" />
                    </Circle>

                    <Circle ref={div5Ref} className="size-16">
                        <Icons.database />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">

                    <Circle ref={div6Ref}>
                        <Icons.tailwind />
                    </Circle>
                    <Circle ref={div7Ref}>
                        <Icons.aws />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef  as React.RefObject<HTMLElement>}
                fromRef={div1Ref  as React.RefObject<HTMLElement>}
                toRef={div4Ref  as React.RefObject<HTMLElement>}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef  as React.RefObject<HTMLElement>}
                fromRef={div2Ref  as React.RefObject<HTMLElement>}
                toRef={div4Ref  as React.RefObject<HTMLElement>}
            />
            <AnimatedBeam
                containerRef={containerRef  as React.RefObject<HTMLElement>}
                fromRef={div3Ref  as React.RefObject<HTMLElement>}
                toRef={div4Ref  as React.RefObject<HTMLElement>}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef  as React.RefObject<HTMLElement>}
                fromRef={div5Ref  as React.RefObject<HTMLElement>}
                toRef={div4Ref  as React.RefObject<HTMLElement>}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef  as React.RefObject<HTMLElement>}
                fromRef={div6Ref  as React.RefObject<HTMLElement>}
                toRef={div4Ref  as React.RefObject<HTMLElement>}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef  as React.RefObject<HTMLElement>}
                fromRef={div7Ref  as React.RefObject<HTMLElement>}
                toRef={div4Ref  as React.RefObject<HTMLElement>}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div>
    );
}

const Icons = {
    react: () => (
        <FaReact className="text-blue-600 text-4xl" />
    ),
    nextjs: () => (
        <RiNextjsFill className="text-slate-200 text-6xl" />
    ),
    tailwind: () => (
        <RiTailwindCssFill className="text-blue-600 text-6xl" />
    ),
    nodejs: () => (
        <FaNodeJs className="text-green-600 text-6xl" />
    ),
    aws: () => (
        <FaAws className="text-pink-600 text-6xl" />
    ),
    database: () => (
        <Database className="text-blue-400 text-6xl" />
    )
};
