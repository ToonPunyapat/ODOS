import React from "react";

function Highlight() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#869bd4]">
        Inspiring Youth,
      </p>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#869bd4]">
        Creating New Opportunities for the Nations
      </p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <img src="/images/icon1.svg" alt="" />
          <p className="text-[black] mt-3.5 text-center text-lg font-semibold md:text-xl lg:text-2xl mb-4">
            Youth
          </p>
          <p className="text-sm lg:text-lg text-center max-w-52">
            Foster hands-on, inclusive, and equitable learning opportunities
          </p>
          <br />
          <p className="text-sm mt-5 lg:text-lg text-center max-w-60">
            Cultivate a forward-thinking mindset, opening doors to digital
            opportunities for local development
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/icon2.svg" alt="" />
          <p className="text-[black] mt-3.5 text-center text-lg font-semibold md:text-xl lg:text-2xl mb-4">
            Economy
          </p>
          <p className="text-sm lg:text-lg text-center max-w-72">
            Strengthen diplomatic ties, connecting global tech companies, global
            universities, and Thailand
          </p>
          <br />
          <p className="text-sm mt-5 lg:text-lg text-center max-w-72">
            Build international confidence in Thailand's digital workforce
            development strategies
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/icon3.SVG" alt="" />
          <p className="text-[black] mt-3.5 text-center text-lg font-semibold md:text-xl lg:text-2xl mb-4">
            Nation
          </p>
          <p className="text-sm lg:text-lg text-center max-w-60">
            Develop innovative education models that ensure equal and widespread
            opportunities across all areas
          </p>
          <p className="text-sm mt-5 lg:text-lg text-center max-w-64">
            Nurture young talents to adapt to digital transformations and
            geopolitical shifts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
