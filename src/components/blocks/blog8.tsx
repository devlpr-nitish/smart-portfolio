"use client";
import { Card } from "@/components/ui/card";
import { Blog8Props, Post } from "@/lib/types";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";


const Blog8 = ({ posts }: Blog8Props) => {
  return (
    <section className="">
      <div className="container flex flex-col items-center gap-16">
        <Separator />
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts?.map((post) => (
            <Card
              key={post.id}
              className="mx-6 order-last border-0 bg-transparent shadow-lg sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">

                <div className="sm:col-span-5">
                  <div className="mb-2 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>

                  <h3 className="md:text-md text-sm font-semibold md:text-lg lg:text-xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="mb-4 text-muted-foreground text-[12px] md:mt-5">
                    {post.summary}
                  </p>

                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => <span className="bg-[#252525] p-1 rounded" key={tag}>{tag}</span>)}
                    </div>
                  </div>

                </div>


                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="md:max-w-sm mx-auto aspect-[16/9] overflow-hidden rounded-lg border border-border">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", duration:20}}
                        className="h-full w-full"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </motion.div>
                    </div>
                  </a>
                </div>

              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export { Blog8 };
