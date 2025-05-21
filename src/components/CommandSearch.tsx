"use client";

import { useEffect, useState } from "react";
import { Home, Cpu, BookCheck, FolderKanban, Search, Github, Linkedin, TwitterIcon, Book } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

export function CommandSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="inline-flex h-9 w-fit rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <Search
            className="-ms-1 me-3 text-muted-foreground/80"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="font-normal text-muted-foreground/70">Search</span>
        </span>
        <kbd className="-me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
          ⌘K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList className="no-scrollbar bg-[#050505]/60">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <Link href="/" onClick={() => setOpen(false)}>
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <Home
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-blue-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Home</span>
                  <p className="text-[12px] opacity-60">Welcome to my world</p>
                </div>
              </CommandItem>
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <FolderKanban
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-purple-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Works</span>
                  <p className="text-[12px] opacity-60">Things I have built</p>
                </div>
              </CommandItem>
            </Link>

            <Link href="/skills" onClick={() => setOpen(false)}>
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <Cpu
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-green-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Skills</span>
                  <p className="text-[12px] opacity-60">Things that make me stand out</p>
                </div>
              </CommandItem>
            </Link>

            <Link href="/blogs" onClick={() => setOpen(false)}>
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <BookCheck
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-orange-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Blogs</span>
                  <p className="text-[12px] opacity-60">Words of a Dev</p>
                </div>
              </CommandItem>
            </Link>
          </CommandGroup>


          <CommandGroup heading="General">
            <a
              href="https://drive.google.com/file/d/1A0RG78ppWEOz0q8x6E_AO7ZxocIs_Cer/view?usp=sharing"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <Book
                  size={24}
                  className="opacity-60 group-hover:text-red-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Resume</span>
                  <p className="text-[12px] opacity-60">View my Resume</p>
                </div>
              </CommandItem>
            </a>
          </CommandGroup>



          <CommandGroup heading="DSA">
            <a
              href="https://leetcode.com/u/devlprnitish/"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <SiLeetcode
                  size={24}
                  className="opacity-60 group-hover:text-yellow-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Leetcode</span>
                  <p className="text-[12px] opacity-60">Problem solving</p>
                </div>
              </CommandItem>
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/devlprnitish/"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <SiGeeksforgeeks
                  size={24}
                  className="opacity-60 group-hover:text-green-600 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Geeksforgeeks</span>
                  <p className="text-[12px] opacity-60">Problem solving</p>
                </div>
              </CommandItem>
            </a>
          </CommandGroup>

          <CommandGroup heading="Social">
            <a
              href="https://github.com/devlpr-nitish"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <Github
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-gray-900 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>Github</span>
                  <p className="text-[12px] opacity-60">Development Journey</p>
                </div>
              </CommandItem>
            </a>

            <a
              href="https://www.linkedin.com/in/devlpr-nitish/"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <Linkedin
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-blue-600 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>LinkedIn</span>
                  <p className="text-[12px] opacity-60">Connect to talk</p>
                </div>
              </CommandItem>
            </a>

            <a
              href="https://x.com/devlprnitish"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              <CommandItem className="group cursor-pointer mb-2 py-4">
                <TwitterIcon
                  size={24}
                  strokeWidth={2}
                  className="opacity-60 group-hover:text-blue-500 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div>
                  <span>X</span>
                  <p className="text-[12px] opacity-60">Connect to talk</p>
                </div>
              </CommandItem>
            </a>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

