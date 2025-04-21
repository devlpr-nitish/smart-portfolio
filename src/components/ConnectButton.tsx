"use client";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowBigRightDashIcon, ArrowRight } from "lucide-react";

export function ConnectButton() {
  return (
    <Button variant="outline" className="bg-transparent text-[#d3d3d3] py-6 rounded-full cursor-pointer">
      Let's Connect
      <span className="-me-1 ms-3 inline-flex h-8 max-h-full p-4 bg-white items-center rounded-full border border-border px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground">
        <ArrowRight/>
      </span>
    </Button>
  );
}

