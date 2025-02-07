import React from "react";

function Sponsors() {
  const logoFiles = import.meta.glob("/src/icons/svg/*.svg", { eager: true });
  const logos = Object.values(logoFiles);

  // ฟังก์ชันสำหรับสุ่มรายการ
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledLogos = shuffleArray(logos); // เรียงลำดับใหม่แบบสุ่ม

  return (
    <div>
      <div className="flex flex-col items-center place-content-center px-5 py-5">
        <p className="text-[red] text-center place-items-center text-4xl font-bold mb-5">
          Sponsored By
        </p>
        <div className="flex flex-wrap bg-white rounded-3xl justify-center">
          {shuffledLogos.map((logo, index) => (
            <div
              key={index}
              className="flex basis-40 justify-center items-center"
            >
              <img
                src={logo.default} // โลโก้แต่ละอัน
                alt={`Logo ${index + 1}`} // ข้อความ alt
                width={100}
                height={100}
                className="object-contain mt-2 mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
