import React from "react";

function Region() {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold ">NORTH AMERICA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>
              <a
                href="/pdf/DEPA_20220412_ระบบปรับอากาศ.pdf"
                // target="_blank"
                rel="noopener noreferrer"
              >
                USA
              </a>
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">EUROPE</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>UK</p>
            <p>Germany</p>
            <p>Sweden</p>
            <p>Finland</p>
            <p>Estonia</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">
            AUSTRALIA
          </p>
          <div className="text-lg sm:text-xl mt-2">
            <p>Australia</p>
            <p>New Zealand</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">ASIA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>China</p>
            <p>India</p>
            <p>Japan</p>
            <p>Korea</p>
            <p>Singapore</p>
            <p>Taiwan</p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-right">
          * Click on the destination to see more details.
        </p>
      </div>
    </div>
  );
}

export default Region;
