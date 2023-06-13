import React from "react";

// Assets
import Tree from "@/assets/Tree";
import Setting from "@/assets/Setting";
import Sframe from "@/assets/Sframe";
import Locate from "@/assets/Locate";


function Section3() {
  return (
    <div className="bg-bgSpecial py-28">
      <h1 className="text-[56px] leading-[61px] font-semibold text-center">
        Strategy
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-36 mt-12">
        <div>
          <Tree />
          <div className="flex items-center gap-3 mt-6">
            <span className="font-bold text-2xl text-gray-600">01</span>
            <div className="h-[1px] w-[28px] bg-black"></div>
            <span className="font-bold text-2xl text-gray-600">
              Vertical SaaS
            </span>
          </div>
            <p className="max-w-[263px] ml-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <Setting />
          <div className="flex items-center gap-3 mt-6">
            <span className="font-bold text-2xl text-gray-600">02</span>
            <div className="h-[1px] w-[28px] bg-black"></div>
            <span className="font-bold text-2xl text-gray-600">
            Underserved Industries
            </span>
          </div>
            <p className="max-w-[263px] flex ml-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-36 mt-12">
        <div>
          <Sframe />
          <div className="flex items-center gap-3 mt-6">
            <span className="font-bold text-2xl text-gray-600">03</span>
            <div className="h-[1px] w-[28px] bg-black"></div>
            <span className="font-bold text-2xl text-gray-600">
            Capital efficient
            </span>
          </div>
            <p className="max-w-[263px] ml-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <Locate />
          <div className="flex items-center gap-3 mt-6">
            <span className="font-bold text-2xl text-gray-600">04</span>
            <div className="h-[1px] w-[28px] bg-black"></div>
            <span className="font-bold text-2xl text-gray-600">
            Underserved Geographic
            </span>
          </div>
            <p className="max-w-[263px] flex ml-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
