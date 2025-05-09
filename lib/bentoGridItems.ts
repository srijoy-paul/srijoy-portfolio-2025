import { BentoGridItems } from "./Types";
// writing grid spans over here(have to create grid layout at first cols and rows)
const items: BentoGridItems[] = [
  {
    id: 1,
    title:
      "I build impactful systems with clean architecture and full-stack expertise.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2", //lg:min-h-[40vh]
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b11.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I collaborate seamlessly across time zones and agile teams.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title:
      "Currently engineering a Web IDE & experimenting with animation libraries.",
    description: "Passion for building dev tools and user-centric experiences.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-80 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 4,
    title: "A tech enthusiast with a love for elegant code and system design.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "My Tech Stack",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Let’s collaborate on meaningful software projects!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export default items;
