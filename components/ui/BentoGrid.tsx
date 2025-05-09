import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { SkillsGrid } from "./SkillsGrid";
import { skills } from "@/lib/skills";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    // defining grid over here
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-6 lg:grid-cols-5 md:grid-rows-7 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-2 relative rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover,object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id == 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"w-full h-full object-cover,object-center"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold " />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10  text-[#c1c2d3] dark:text-neutral-300 border border-red-300"
          )}
        >
          <div className="font-sans text-sm md:text-xs font-extralight text-[#c1c2d3] dark:text-neutral-300 lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>
          {id === 5 && <SkillsGrid categories={skills} />}
        </div>

        {id == 2 && <GridGlobe />}
      </div>
      {/* {header} */}
    </div>
  );
};
