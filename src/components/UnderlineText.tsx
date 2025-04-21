"use client";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";


export function CustomStyleUnderlineText() {
  return (
    <AnimatedText
      text="Full Stack Developer!"
      textClassName="text-lg"
      underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
      underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
      underlineDuration={1.5}
    />
  );
}

