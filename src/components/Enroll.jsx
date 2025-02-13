import React from "react";

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
      <p className="text-[#869bd4] font-bold text-4xl mb-5">
        Applications are open
      </p>
      <p className="text-[#869bd4] font-bold text-4xl mb-5">1 March 2025</p>
      <p className="text-[#869bd4] font-bold text-4xl mt-24 mb-5">Apply now!</p>
      {/* <button
        onClick={handleEnrollClick}
        className="bg-white text-gray-900 rounded-3xl border border-gray-200 px-6 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-100 hover:text-black transition-all"
      >
        Enroll (Coming Soon)
      </button> */}
      <div className="flex justify-center items-center drop-shadow-lg mb-24">
        <a href="https://xn--72cst3czdd.com/" target="_blank">
          <img
            src="\images\cropped-Thang-Rath-by-DGA-logo.png"
            alt=""
            width={125}
            height={125}
            className="bg-white rounded-2xl p-4 object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default Enroll;
