"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { ConnectButton } from "../ConnectButton"
import Link from "next/link"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-[#050505] text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid md:gap-16 gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="relative flex md:flex-col justify-center  ">
            <div className="">
              <h2 className="mb-4 text-3xl text-[#045F77] font-bold tracking-tight">Nitish</h2>
              <p className="mb-6 text-muted-foreground">
                Let's connect and work on your ideas
              </p>
            </div>
            <div className="">
              <ConnectButton />
            </div>
            <div className="absolute top-8 left-10  md:-right-4 md:top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="md:mb-4 mb-2 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm flex gap-4">
              <Link href="/" className="block transition-colors hover:text-primary hover:underline">
                Home
              </Link>
              <Link href="projects" className="block transition-colors hover:text-primary hover:underline">
                Works
              </Link>
              <Link href="skills" className="block transition-colors hover:text-primary hover:underline">
                Skills
              </Link>
              <Link href="blogs" className="block transition-colors hover:text-primary hover:underline">
                Blogs
              </Link>
            </nav>
          </div>

          <div className="relative">
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {2025} Made By <b className="text-[#045F77]">Nitish</b>
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }