import React from "react";

// Assets
import Drop from "@/assets/Drop";
import Atom from "@/assets/Attom";
import Angular from "@/assets/Angular";
import Docker from "@/assets/Docker";
import Joomla from "@/assets/Joomla";
import Python from "@/assets/Python";
import Swift from "@/assets/Swift";
import Git from "@/assets/Git";

function Section4() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-16 py-28">
      <div>
        <h1 className="font-semibold text-[36px] leading-[62px] ">Our Companies</h1>
        <span className="text-lg text-[#667085] leading-6 font-medium mt-1">Trusted by 4,000+ companies</span>
      </div>
      <div className="grid grid-cols-3 lg:flex gap-6">
        <div className="w-[56px] h-[56px]  border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Drop />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Atom />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Angular />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Docker />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Joomla />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Python />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Swift />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Git />
        </div>
        <div className="w-[56px] h-[56px] border-2 border-black rounded-full flex justify-center items-center bg-iconsbg hover:bg-iconsbg/60">
          <Angular />
        </div>
      </div>
    </div>
  );
}

export default Section4;
