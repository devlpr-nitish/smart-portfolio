import { FaNodeJs, FaReact } from "react-icons/fa";
import { ProjectTypes } from "./types";
import { SiMongodb } from "react-icons/si";

export const projectData: ProjectTypes = [
  {
    title: "Free Brain",
    description: "A MERN stack web app to organize links, codes, documents, and videos with AI-powered summarization.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link:"https://webquery.onrender.com/convert"
  },
  {
    title: "Share Thought",
    description: "A social app for college students to post thoughts visible only within their campus. Auto-deletes after 24 hours.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link:"https://webquery.onrender.com/convert"
  },
  {
    title: "Check-In System",
    description: "A gate pass approval system for colleges that tracks check-in/out and requires warden permission for outings.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link:"https://webquery.onrender.com/convert"
  },
  {
    title: "To-Do with AI",
    description: "Weekly input-based AI task generator with manual overrides to help students stay organized.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link:"https://webquery.onrender.com/convert"
  },
]




