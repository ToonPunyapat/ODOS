import React from "react";

function Region() {
  return (
    <div className="max-w-6xl mx-auto p-5 mt-24">
      <p className="text-xl sm:text-2xl md:text-3xl text-center mt-5">
        Thai Student in High School | Vacation School | University
      </p>

      <div className="text-center mt-10">
        <p className="text-4xl sm:text-5xl font-bold">900+</p>
        <p className="text-lg sm:text-2xl">Students/year</p>
        <p className="text-sm sm:text-lg">
          878 districts nationwide + 50 districts in Bangkok
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold">NORTH AMERICA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>USA</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold">EUROPE</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>UK</p>
            <p>Germany</p>
            <p>Sweden</p>
            <p>Finland</p>
            <p>Estonia</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold">AUSTRALIA</p>
          <div className="text-lg sm:text-xl mt-2">
            <p>Australia</p>
            <p>New Zealand</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold">ASIA</p>
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
    </div>
  );
}

export default Region;
