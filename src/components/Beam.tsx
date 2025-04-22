"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiAws } from "react-icons/di";
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
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg p-10 md:shadow-xl"
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
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
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


// "use client";

// import React, { forwardRef, useRef } from "react";

// import { cn } from "@/lib/utils";
// import { AnimatedBeam } from "@/components/ui/animated-beam";

// const Circle = forwardRef<
//   HTMLDivElement,
//   { className?: string; children?: React.ReactNode }
// >(({ className, children }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={cn(
//         "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// });

// Circle.displayName = "Circle";

// export function AnimatedBeamDemo() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const div1Ref = useRef<HTMLDivElement>(null);
//   const div2Ref = useRef<HTMLDivElement>(null);
//   const div3Ref = useRef<HTMLDivElement>(null);
//   const div4Ref = useRef<HTMLDivElement>(null);
//   const div5Ref = useRef<HTMLDivElement>(null);
//   const div6Ref = useRef<HTMLDivElement>(null);
//   const div7Ref = useRef<HTMLDivElement>(null);

//   return (
//     <div
//       className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
//       ref={containerRef}
//     >
//       <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
//         <div className="flex flex-row items-center justify-between">
//           <Circle ref={div1Ref}>
//             <Icons.googleDrive />
//           </Circle>
//           <Circle ref={div5Ref}>
//             <Icons.googleDocs />
//           </Circle>
//         </div>
//         <div className="flex flex-row items-center justify-between">
//           <Circle ref={div2Ref}>
//             <Icons.notion />
//           </Circle>
//           <Circle ref={div4Ref} className="size-16">
//             <Icons.openai />
//           </Circle>
//           <Circle ref={div6Ref}>
//             <Icons.zapier />
//           </Circle>
//         </div>
//         <div className="flex flex-row items-center justify-between">
//           <Circle ref={div3Ref}>
//             <Icons.whatsapp />
//           </Circle>
//           <Circle ref={div7Ref}>
//             <Icons.messenger />
//           </Circle>
//         </div>
//       </div>