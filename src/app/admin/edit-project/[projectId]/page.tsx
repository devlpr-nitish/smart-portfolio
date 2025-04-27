'use client';

import { MultipleSelect } from "@/components/MultiSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
}

export default function EditProject() {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  // In real app you fetch by id from backend
  const [project, setProject] = useState<Project>({
    id: id,
    title: '',
    description: '',
    link: '',
  });

  useEffect(() => {
    // Fake fetch from localStorage or API
    const localProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const findProject = localProjects.find((p: Project) => p.id === id);
    if (findProject) setProject(findProject);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let localProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    localProjects = localProjects.map((p: Project) => (p.id === id ? project : p));
    localStorage.setItem("projects", JSON.stringify(localProjects));
    router.push("/admin");
  };

  return (
    <div className="w-full min-h-[800px] p-8 bg-gray-100 dark:bg-neutral-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          placeholder="Title"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <Textarea
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          placeholder="Description"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <Input
          type="url"
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
          placeholder="Link"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <Input
          type="file"
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
          placeholder="Link"
          className="cursor-pointer border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <MultipleSelect/>
        <Button type="submit" className="cursor-pointer">
          Save
        </Button>
      </form>
    </div>
  );
}
