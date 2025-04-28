'use client';

import { MultipleSelect } from "@/components/MultiSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function AddProject() {
  const router = useRouter();

  // In real app you fetch by id from backend
  const [skill, setSkill] = useState({
    name: '',
    type: '',
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
          value={skill.name}
          onChange={(e) => setSkill({ ...skill, name: e.target.value })}
          placeholder="Skill"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        <Input
          value={skill.type}
          onChange={(e) => setSkill({ ...skill, type: e.target.value })}
          placeholder="Type"
          className="border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />
        
        <Button type="submit" className="cursor-pointer">
          Add
        </Button>
      </form>
    </div>
  );
}
