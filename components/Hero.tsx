import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

function Hero() {
  return (
    <section className="pb-20 pt-36  h-screen">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen absolute top-0 left-0 flex w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.3] bg-grid-black/[0.2]">
        {/* Shadcn comp */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />

        {/* custom code */}
        <div className="relative flex justify-center my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Scalable Web Solutions
            </h2>
            <TextGenerateEffect
              className="text-center text-[37px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into seamless Experiences"
            />
            <p className="text-center tracking-wider text-sm mb-4 md:text-lg lg:text-2xl text-blue-100">
              Hi, I&apos;m{" "}
              <span className="underline decoration-[#FFB703] font-bold">
                Srijoy Paul
              </span>
              , a Software Developer based in India.
            </p>
            <a href="#about" className="mt-5 md:mt-10  w-full md:w-48">
              <MagicButton
                title="Show my Work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="gap-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
