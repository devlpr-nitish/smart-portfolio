"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";

function ProjectCoverText() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-2 relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        I Build these <br />amazing <Cover>Projects</Cover>
      </h1>
    </div>
  );
}

function SkillsCoverText() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-2 relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Working with these<br />latest <Cover>Technologia</Cover>
      </h1>
    </div>
  );
}

function ExperienceCoverText() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-2 relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Worked with these<br />Cool <Cover>Companies</Cover>
      </h1>
    </div>
  );
}

export {ProjectCoverText, SkillsCoverText, ExperienceCoverText};