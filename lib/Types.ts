import React from "react";
export type BentoGridItems = {
  title: string;
  description: string;
  id: number;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};

export type Skills = Record<
  string,
  { name: string; icon?: string | React.ReactNode | null }[]
>;
