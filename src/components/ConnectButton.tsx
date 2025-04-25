"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowBigRightDashIcon, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { Textarea } from "./ui/textarea";
import { Separator } from "@radix-ui/react-separator";

export function ConnectButton() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-transparent text-[#d3d3d3] py-6 rounded-full cursor-pointer">
          <span className="">Let's Connect</span>
          <span className="-me-1 ms-3 inline-flex md:h-8 h-6 max-h-full p-4 bg-white items-center rounded-full border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground">
            <ArrowRight className="text-sm md:text-md" />
          </span>
        </Button>
      </DrawerTrigger>

      <DrawerContent className="md:w-[600px] mx-auto">
        <div className="px-12 w-full min-w-sm">
          <DrawerHeader>
            <div className="flex mt-4 justify-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href="https://github.com/devlpr-nitish">
                      <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">Github</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect me on Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href="https://x.com/devlprnitish">
                      <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect me on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href="https://www.linkedin.com/in/devlpr-nitish/">
                      <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect me on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href="https://leetcode.com/u/devlpr-nitish/">
                      <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                        <SiLeetcode className="h-4 w-4" />
                        <span className="sr-only">Leetcode</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View my Problem Solving</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a target="_blank" href="https://www.geeksforgeeks.org/user/devlprnitish/">
                      <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                        <SiGeeksforgeeks className="h-4 w-4" />
                        <span className="sr-only">Geeksforgeeks</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View my Problem Solving</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </DrawerHeader>

          <form className="w-full grid gap-4 p-4">
            <div className="grid gap-2">
              <Input
                required
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="grid gap-2">
              <Textarea
                required
                id="message"
                placeholder="Your message"
              />
            </div>
          </form>
          <DrawerFooter>
            <Button type="submit">Send Message</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

