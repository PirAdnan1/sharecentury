import React from "react";

// Assest
import Design from "@/assets/Design";

function Section2() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mx-4 gap-24 py-40">
      <div>
        <h1 className="md:text-[56px] text-secondary text-[36px] font-semibold leading-[62px]">Timeline</h1>
        <p className="max-w-[588px] mt-6">
          Vertipo builds companies with a long term perspective and a unique
          appreciation for the challenges each profession faces.
        </p>
      </div>
      <div>
        <Design />
      </div>
    </div>
  );
}

export default Section2;
