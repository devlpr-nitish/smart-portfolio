import { FaNodeJs, FaReact } from "react-icons/fa";
import { Post, Project, ProjectTypes } from "./types";
import { SiMongodb } from "react-icons/si";

const projectData: ProjectTypes[] = [
  {
    title: "Share Thought",
    description: "A social app for college students to post thoughts visible only within their campus. Auto-deletes after 24 hours.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://daily-thought-silk.vercel.app/"
  }, 
  {
    title: "Web Query",
    description: "A gate pass approval system for colleges that tracks check-in/out and requires warden permission for outings.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://webquery.onrender.com/convert"
  },
  {
    title: "Free Brain",
    description: "A MERN stack web app to organize links, codes, documents, and videos with AI-powered summarization.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://commingsoon.com/"
  },

  {
    title: "CGPA XXXX",
    description: "This project is in progress",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://commingsoon.com/"
  },
]


const blogsData: Post[] = [
  {
    id: "blog-1",
    title:
      "I will release this blog soon",
    summary:
      "Stay connected to read blogs , which i will release soon",
    published: "XX XXX XXXX",
    url: "https://www.geeksforgeeks.org/user/devlprnitish/",
    image: "comingsoon.jpg",
    tags: ["XXXX XXXX", "XXXX XXXX"],
  },
  {
    id: "blog-2",
    title:
      "I will release this blog soon",
    summary:
      "Stay connected to read blogs , which i will release soon",
    published: "XX XXX XXXX",
    url: "https://www.geeksforgeeks.org/user/devlprnitish/",
    image: "comingsoon.jpg",
    tags: ["XXXX XXXX", "XXXX XXXX"],
  },
];


export { projectData, blogsData }


