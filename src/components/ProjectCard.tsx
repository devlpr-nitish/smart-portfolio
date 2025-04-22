"use client";
import { AnimatedCard } from "@/components/ui/feature-block-animated-card"
import { ProjectTypes } from "@/lib/types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const ProjectCard = ({ project }: { project: ProjectTypes }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <AnimatedCard
                    title={project.title}
                    description={project.description}
                    icons={project.icons}
                />
            </a>

        </motion.div>
    );
};

