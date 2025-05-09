import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

function SimpleButton({ title }: { title: string }) {
  return (
    <button className="px-7 py-2 rounded-md border border-[#E4ECFF] bg-[#000319] text-[#E4ECFF] text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 flex gap-2 items-center justify-center">
      <MdOutlineFileDownload />
      {title}
    </button>
  );
}

export default SimpleButton;
