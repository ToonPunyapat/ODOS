import React from "react";
import FileButton from "./FileButton";

function File() {
  return (
    <div className="p-24 flex flex-col items-center">
      <p className="text-[red] text-4xl font-bold text-center">
        Details of each region
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center mt-10 gap-10 sm:gap-16 lg:gap-24 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-center text-[black] dark:text-[white] mb-5">
            America
          </p>
          <a href="#">
            <FileButton />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-center text-[black] dark:text-[white] mb-5">
            Europe
          </p>
          <a href="#">
            <FileButton />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-center text-[black] dark:text-[white] mb-5">
            Australia
          </p>
          <a href="#">
            <FileButton />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold text-center text-[black] dark:text-[white] mb-5">
            Asia
          </p>
          <a href="#">
            <FileButton />
          </a>
        </div>
      </div>
    </div>
  );
}

export default File;
