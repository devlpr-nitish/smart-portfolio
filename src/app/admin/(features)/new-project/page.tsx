'use client';

import { MultipleSelect } from "@/components/MultiSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/ui/multiselect";
import { Textarea } from "@/components/ui/textarea";
import { frameworks } from "@/lib/data";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface Project {
  title: string;
  description: string;
  link: string; // maybe your project live link
  image?: File | null;
  techs: string[]; // selected tech stack ids or names
}




export default function AddProject() {
  const router = useRouter();
  const[loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project>({
    title: '',
    description: '',
    link: '',
    image: null,
    techs: [],
  });


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const response = await  fetch('/api/projects/', {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(project)
      });


      const data = response.json();
      // const {success, message} = data;

      // if(success){
      //   toast(message);
      //   router.push("/admin/projects")
      // }else{
      //   toast(message)
      // }
    } catch (error) {
      toast("Internal server error");      
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="w-full min-h-[800px] p-8 bg-gray-100 dark:bg-neutral-800 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Project</h2>
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
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setProject((prev) => ({ ...prev, image: file }));
            }
          }}
          placeholder="Image"
          className="cursor-pointer border p-3 rounded-lg bg-gray-100 dark:bg-neutral-800"
          required
        />

        <div className="*:not-first:mt-2">
          <MultipleSelector
            commandProps={{
              label: "Select tech",
            }}
            value={frameworks.filter(f => project.techs.includes(f.value))} // assuming frameworks have a `value` property
            onChange={(selected) => {
              setProject((prev) => ({
                ...prev,
                techs: selected.map(item => item.value),
              }));
            }}
            defaultOptions={frameworks}
            placeholder="Select techs"
            hideClearAllButton
            hidePlaceholderWhenSelected
            emptyIndicator={<p className="text-center text-sm">No results found</p>}
          />

        </div>
        <Button disabled={loading} type="submit" className="cursor-pointer">
          {loading ? "Adding" : 'Add'}
        </Button>
      </form>
    </div>
  );
}
