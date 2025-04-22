import { ReactElement } from "react";

export type IconDataTypes = {
  icon: ReactElement;
  size: "sm" | "md" | "lg";
};

export type ProjectTypes = {
  title: string;
  description: string;
  icons: IconDataTypes[];
  link:string;
};
