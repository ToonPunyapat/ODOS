import React from "react";
import { Link } from "react-router-dom";

function Enroll() {
  const handleEnrollClick = () => {
    window.open("/register", "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      {/* โค้ดชุดนี้ไว้เปิดใช้ตอนโครงการเปิดรับสมัคร */}
      {/* <p className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-white">
      Summer Camp Is <span className="text-[#FFF200]">Now Open!</span>
    </p> */}
      <p className="text-[red] font-bold text-5xl mb-5">Apply Here !</p>
      <p className="text-lg text-[black] dark:text-[white] sm:text-xl md:text-2xl mb-1 sm:mb-2 md:mb-4">
        Coming Soon March 2025
      </p>
      {/* <button
        onClick={handleEnrollClick}
        className="bg-white text-gray-900 rounded-3xl border border-gray-200 px-6 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-100 hover:text-black transition-all"
      >
        Enroll (Coming Soon)
      </button> */}
      <div className="flex justify-center items-center">
        <a href="https://xn--72cst3czdd.com/" target="_blank">
          <img
            src="\images\cropped-Thang-Rath-by-DGA-logo.png"
            alt=""
            width={200}
            height={200}
            className="bg-white rounded-2xl p-4 object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default Enroll;
