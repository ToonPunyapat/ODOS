import React from "react";

function Detail() {
  return (
    <div>
      <div className="flex flex-col items-center place-content-center text-center py-10 sm:py-12 md:py-16 px-4 h-full">
        <p className="text-3xl sm:text-4xl md:text-5xl text-[#869bd4] font-bold">
          Project details
        </p>
        <p className="text-sm text-justify sm:text-base md:text-lg text-black text-left mt-6 sm:mt-8 md:mt-10 max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed indent-8">
          The “One District, One Scholarship Summer Camp” project aims to create
          equal educational opportunities for all Thai youth from every district
          throughout Thailand, especially in remote areas including Bangkok,
          through granting scholarships to study and learn modern digital
          technologies abroad, as well as gaining real work experience in
          world-class companies and visiting leading technology companies abroad
          so that these youths will have digital skills and be able to bring
          back the knowledge and skills they have gained to develop the country.
        </p>
        {/* <a
          className="bg-white text-black rounded-3xl border border-gray-200 px-6 py-2 mt-7 text-sm drop-shadow-lg sm:text-base md:text-lg hover:bg-gray-100 hover:text-black transition-all"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Details
        </a> */}
      </div>
    </div>
  );
}

export default Detail;
