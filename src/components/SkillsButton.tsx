import { Button } from "@/components/ui/skills-button";

export function SkillsButton({icon, label}:any) {
  return (
    <Button variant="outline" className="flex gap-2 font-bold select-none bg-[#171717] text-gray-200 border border-[rgba(255,255,255,0.10)] ">
      {label}{" "}{icon}
    </Button>
  );
}

