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

export type Post = {
  id: string;
  title: string;
  summary: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}
export type Blog8Props = {
  posts: Post[];
};

