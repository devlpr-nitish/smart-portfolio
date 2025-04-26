import { FaNodeJs, FaReact } from "react-icons/fa";
import { Post, Project, ProjectTypes } from "./types";
import { SiMongodb } from "react-icons/si";

const projectData: ProjectTypes[] = [
  {
    title: "Free Brain",
    description: "A MERN stack web app to organize links, codes, documents, and videos with AI-powered summarization.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://webquery.onrender.com/convert"
  },
  {
    title: "Share Thought",
    description: "A social app for college students to post thoughts visible only within their campus. Auto-deletes after 24 hours.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://webquery.onrender.com/convert"
  },
  {
    title: "Check-In System",
    description: "A gate pass approval system for colleges that tracks check-in/out and requires warden permission for outings.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://webquery.onrender.com/convert"
  },
  {
    title: "To-Do with AI",
    description: "Weekly input-based AI task generator with manual overrides to help students stay organized.",
    icons: [
      { icon: <FaReact className="h-5 w-5  text-blue-600" />, size: "lg" },
      { icon: <FaNodeJs className="h-5 w-5 text-green-600" />, size: "md" },
      { icon: <SiMongodb className="h-4 w-4 text-green-800" />, size: "sm" },
    ],
    link: "https://webquery.onrender.com/convert"
  },
]


const blogsData:Post [] = [
  {
    id: "post-1",
    title:
      "Building Modern UIs: A Deep Dive into Shadcn and React Components",
    summary:
      "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
    published: "15 Feb 2024",
    url: "https://www.geeksforgeeks.org/user/devlprnitish/",
    image: "gfgprofile.png",
    tags: ["Web Design", "UI Development"],
  },
  {
    id: "post-2",
    title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
    summary:
      "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
    published: "22 Feb 2024",
    url: "https://webquery.onrender.com/",
    image: "webquery.png",
    tags: ["Web Design", "CSS"],
  },
];

export const projects:Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills, projects, and blogs. Built using React and TailwindCSS.",
    link: "https://your-portfolio.com",
  },
  {
    id: "2",
    title: "Admin Dashboard",
    description: "An admin dashboard to manage projects, skills, and blogs dynamically.",
    link: "https://admin-dashboard.com",
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "A full-stack MERN blog application where users can create, edit, and delete posts.",
    link: "https://mern-blog-app.com",
  },
  {
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },
  {
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },{
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },{
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },{
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },{
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },{
    id: "4",
    title: "E-commerce Store",
    description: "A simple e-commerce web app with shopping cart, payment gateway, and order management.",
    link: "https://shop-now.com",
  },
];



export { projectData, blogsData }


