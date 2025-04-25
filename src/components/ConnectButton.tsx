"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { Textarea } from "./ui/textarea";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "sonner";

export function ConnectButton() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = () => {

    setLoading(true);
    if (!formData.email || !formData.message) {
      toast("Email and Message are required!");
      setLoading(false);
      return;
    }
    if (!emailRegex.test(formData.email)) {
      toast("Enter a valid Email!");
      setLoading(false);
      return;
    }
    const templateParams = {
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,        
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,     
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!    
    )
      .then(() => {
        toast("Message sent!");
        setFormData({ email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email error:", error);
        toast("faild to send message!");
      }).finally(() =>
        setLoading(false)
      )
  };

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

          <form className="w-full flex flex-col gap-4 p-4">
            <div className="w-full">
              <Input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />
            </div>
            <div className="w-full">
              <Textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              />
            </div>
          </form>

          <DrawerFooter className="w-full">
            <Button onClick={sendEmail} disabled={loading} className="cursor-pointer w-full h-10 text-center" type="submit">{loading ? "Sending..." : "Send Message"}</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

