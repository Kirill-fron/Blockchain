import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#B09AA2]">

      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
        Our services<span className="text-red-500">.</span>
        </h1>
        
      </div>
      <ProjectSlider /> 
    </div>
  );
};

export default Page;
