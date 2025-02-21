import React from "react";

const ProgressSteps = ({ status }) => {
    // 🔹 รายการสถานะ (ไม่มีวันที่)
    const steps = [
        "ได้รับเอกสารแล้ว",
        "ผ่านรอบที่ 1",
        "ผ่านรอบที่ 2",
        "รอสัมภาษณ์",
        status === "ไม่ผ่าน" ? "ไม่ผ่าน" : "ผ่านสัมภาษณ์",
    ];

    const dates = [
        "31 มีนาคม -\n 30 เมษายน 68",
        "1 มิถุนายน 68",
        "16 มิถุนายน 68",
        "1 กรกฎาคม 68",
        "", // ไม่มีวันที่ในขั้นสุดท้าย
    ];

    // 🔹 Mapping สถานะปัจจุบัน
    const statusMap = {
        "รอการพิจารณา": 0,
        "ผ่านการพิจารณารอบที่ 1": 1,
        "ผ่านการพิจารณารอบที่ 2": 2,
        "รอสัมภาษณ์": 3,
        "ผ่านการสัมภาษณ์": 4,
        "ไม่ผ่าน": 4,
    };

    const currentStep = statusMap[status] || 0;

    return (
        <div className="relative flex justify-center items-center mt-6 space-x-6 sm:space-x-12 lg:space-x-24 font-sukhumvit">
            {steps.map((label, index) => {
                const isActive = index <= currentStep;
                const isCurrent = index === currentStep;

                const circleColor =
                    status === "ไม่ผ่าน"
                        ? "bg-red-600 border-red-600"
                        : status === "ผ่านการสัมภาษณ์"
                            ? "bg-green-600 border-green-600"
                            : isActive
                                ? isCurrent && (label === "ได้รับเอกสารแล้ว" || label === "รอสัมภาษณ์")
                                    ? "bg-orange-500 border-orange-500"
                                    : "bg-green-600 border-green-600"
                                : "bg-white border-gray-400";

                const lineColor =
                    status === "ไม่ผ่าน"
                        ? "bg-red-600"
                        : status === "ผ่านสัมภาษณ์"
                            ? "bg-green-600"
                            : index < currentStep
                                ? "bg-green-600"
                                : "bg-gray-300";

                return (
                    <div key={index} className="relative flex flex-col items-center min-h-[120px]">
                        {/* วงกลมสถานะ */}
                        <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-4 flex items-center justify-center ${circleColor}`}
                        >
                            <span
                                className={`text-xs sm:text-sm lg:text-lg ${isActive ? "text-white" : "text-gray-700"} font-sukhumvit`}
                            >
                                {index + 1}
                            </span>
                        </div>

                        {/* ข้อความสถานะ */}
                        <div
                            className="text-gray-900 text-center w-full font-sukhumvit whitespace-nowrap"
                            style={{ fontSize: "clamp(10px, 2vw, 16px)", top: "65px" }}
                        >
                            {label}
                        </div>


                        {/* ✅ วันที่ (ใช้ min-h-[20px] และ opacity-0 เมื่อไม่มีค่า) */}
                        <div
                            className={`absolute text-gray-600 text-center w-full min-h-[10px] ${dates[index] ? "" : "opacity-0"
                                } mt-2 sm:mt-2 md:mt-6 text-[7px] sm:text-[8px] md:text-[12.5px] lg:text-[14px]`}
                            style={{ top: "65px" }}
                        >
                            {dates[index] && index === 0 ? (
                                // ถ้ามี \n ให้แสดงสองบรรทัด
                                <span className="whitespace-pre-line">
                                    ({dates[index]})
                                </span>
                            ) : (
                                // ถ้าไม่มี \n ให้แสดงในบรรทัดเดียว
                                <span className="whitespace-nowrap">({dates[index]}) </span>
                            )}
                        </div>


                        {/* เส้นเชื่อมระหว่างสถานะ */}
                        {index < steps.length - 1 && (
                            <div
                                className={`h-2 ${lineColor} 
                 w-[60px] sm:w-[70px] md:w-[130px] lg:w-[190px] 
                 ml-0 sm:ml-0 md:ml-0 lg:ml-0 
                 -mr-[60px] sm:-mr-[80px] md:-mr-[100px] lg:-mr-[126px] 
                 absolute -z-10 
                 top-5 sm:top-10 md:top-7 lg:top-9
                 translate-y-[-40%] sm:translate-y-[-50%] md:translate-y-[-55%] lg:translate-y-[-60%]`}
                            ></div>

                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default ProgressSteps;
