import React from "react";

// assets
import Icons from "@/assets/Icons";

function Section1() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 bg-bgSpecial py-32">
      <Icons />
      <div>
        <h1 className="text-[56px] font-semibold leading-[62px]">Overview </h1>
        <p className="text-xl max-w-[648px] text-gray-600 mt-6">
          Vertipo builds, owns and operates software companies is underserved
          vertical and geographical markets.{" "}
        </p>
        <p className="text-xl max-w-[648px] text-gray-600 mt-3">
          We believe every industry in every geography can become more efficient
          by adoption software solutions. We are here to make that happen.
        </p>
      </div>
    </div>
  );
}

export default Section1;
