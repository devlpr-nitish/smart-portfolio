"use client";

import { Squares } from "@/components/ui/squares-background"


export function SquaresBg() {
  return (
    <div className="space-y-8">
      <div className="relative h-[300px] md:h-[800px] rounded-lg overflow-hidden bg-[#060606]">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
    </div>
  )
}