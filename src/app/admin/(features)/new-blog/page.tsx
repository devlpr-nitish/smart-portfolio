'use client';

import { MultipleSelect } from "@/components/MultiSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function AddBlog() {
  const router = useRouter();

  // In real app you fetch by id from backend
  const [blogs, setBlogs] = useState({
    title: '',
    description: '',
    tags: '',
    image:""
  });

  useEffect(() => {
   
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    router.push("/admin");
  };

  return (
    <div className="w-full min-h-[800px] p-8 bg-gray-100 dark:bg-neutral-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type="text"
          value={blogs.title}
          onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
          placeholder="Title"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <Textarea
          value={blogs.description}
          onChange={(e) => setBlogs({ ...blogs, description: e.target.value })}
          placeholder="Description"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <Input
          type="file"
          value={blogs.image}
          onChange={(e) => setBlogs({ ...blogs, image: e.target.value })}
          placeholder="Image"
          className="cursor-pointer border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <MultipleSelect/>
        <Button type="submit" className="cursor-pointer">
          Add
        </Button>
      </form>
    </div>
  );
}
