// import React from "react";

// function Sponsors() {
//   const logoFiles = import.meta.glob("/src/icons/svg/*.svg", { eager: true });
//   const logos = Object.values(logoFiles);

//   // ฟังก์ชันสำหรับสุ่มรายการ
//   const shuffleArray = (array) => {
//     return array.sort(() => Math.random() - 0.5);
//   };

//   const shuffledLogos = shuffleArray(logos); // เรียงลำดับใหม่แบบสุ่ม

//   return (
//     <div>
//       <div className="flex flex-col items-center place-content-center px-5 py-5">
//         <p className="text-[#869bd4] text-center place-items-center text-4xl font-bold mb-5">
//           Sponsored By
//         </p>
//         <div className="flex flex-wrap bg-white rounded-3xl justify-center">
//           {shuffledLogos.map((logo, index) => (
//             <div
//               key={index}
//               className="flex basis-40 justify-center items-center"
//             >
//               <img
//                 src={logo.default} // โลโก้แต่ละอัน
//                 alt={`Logo ${index + 1}`} // ข้อความ alt
//                 width={100}
//                 height={100}
//                 className="object-contain mt-2 mb-2"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sponsors;

import React from "react";

function Sponsors() {
  return (
    <div className="px-4 py-8">
      <p className="text-center text-2xl md:text-3xl font-bold">
        Driven by Collaboration with Partner Organizations
      </p>

      <div className="mt-10">
        <p className="text-lg md:text-xl text-center">Thai Government</p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <img
            src="/Partner/Thai Government/DEPA.svg"
            alt="DEPA"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
          <img
            src="/Partner/Thai Government/MDES.svg"
            alt="MDES"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-lg md:text-xl text-center">Foreign Government</p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <img
            src="/Partner/Thai Government/DEPA.svg"
            alt="Foreign Partner"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-lg md:text-xl text-center">Global Tech Company</p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <img
            src="/Partner/Thai Government/DEPA.svg"
            alt="Tech Partner"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="text-lg md:text-xl text-center">Global University</p>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
          <img
            src="/Partner/Thai Government/DEPA.svg"
            alt="University Partner"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
