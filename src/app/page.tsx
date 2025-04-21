
import { CustomStyleUnderlineText } from "@/components/UnderlineText";
import { SparkText } from "../components/SparkText";
import { SquaresBg } from "../components/SquarsBg";
import { ConnectButton } from "../components/ConnectButton";
import Link from "next/link";
import { Copy } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-screen">
        <div className="absolute">
          <SquaresBg />
        </div>

        <div className="relative z-10 h-full flex flex-col gap-10 px-20 py-40 items-center">
          <span className="flex gap-2 items-end">
            <span>
              <p className="text-lg text-white">Hello, I'm</p>
              <SparkText />
            </span>
            <span className="flex gap-2 ">
              <span className="text-lg text-white">a</span>
              <span className="text-lg text-white">
                <CustomStyleUnderlineText />
              </span>
            </span>
          </span>

          <div className="px-32">
            <p className="text-md text-center text-[#d1d1d1]"> I build everything from sleek <b className="text-[#045F77]">user interfaces</b> to powerful backend systems. I ensure seamless <b className="text-[#045F77]">integration</b> between frontend and backend to deliver smooth, <b className="text-[#045F77]">scalable</b> web experiences.</p>
          </div>

          <div className="flex justify-center  gap-4 items-center">
            <Link href="connect">
              <ConnectButton />
            </Link>

            <div className="text-[#d3d3d3]">
              <span className="flex gap-2 justify-center cursor-pointer p-2 z-10">
                <Copy/>
                <span className="">devlprnitish@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen">

        <h1>hello</h1>
      </div>

    </>
  );
}
