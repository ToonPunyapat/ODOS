import React, { useState } from "react";

const SearchForm = ({ searchId, setSearchId, handleSearch }) => (
  <form onSubmit={handleSearch} className="mb-3 mt-6 space-y-2">
    <label htmlFor="search_id" className="block text-gray-700 font-sukhumvit">
      ค้นหา:
      <input
        type="text"
        id="search_id"
        name="search_id"
        className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 font-sukhumvit"
        placeholder="กรอกรหัสการสมัครของท่าน"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
    </label>
    <button
      type="submit"
      className="w-16 md:w-16 px-2 py-2 bg-[#0d6efd] text-white font-sukhumvit rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 font-sukhumvit"
    >
      ค้นหา
    </button>
  </form>
);

const ProgressSteps = ({ status }) => {
  const steps = [
    { label: "รอพิจารณา", position: { top: "65px", left: "-15px" } },
    { label: "ผ่านรอบที่ 1", position: { top: "65px", left: "-10px" } },
    { label: "ผ่านรอบที่ 2", position: { top: "65px", left: "-10px" } },
    { label: "รอสัมภาษณ์", position: { top: "65px", left: "-10px" } },
    status === "ไม่ผ่าน"
      ? { label: "ไม่ผ่าน", position: { top: "65px", left: "5px" } }
      : { label: "ผ่านสัมภาษณ์", position: { top: "65px", left: "-10px" } },
  ];

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
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        const isCurrent = index === currentStep;

        const circleColor =
          status === "ไม่ผ่าน"
            ? "bg-red-600 border-red-600"
            : status === "ผ่านการสัมภาษณ์"
            ? "bg-green-600 border-green-600"
            : isActive
            ? isCurrent && (step.label === "รอพิจารณา" || step.label === "รอสัมภาษณ์")
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
          <div key={index} className="relative flex items-center">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-4 flex items-center justify-center ${circleColor}`}
            >
              <span
                className={`text-xs sm:text-sm lg:text-lg ${isActive ? "text-white" : "text-gray-700"} font-sukhumvit`}
              >
                {index + 1}
              </span>
            </div>
            <div
              className="absolute text-xs sm:text-sm lg:text-base text-gray-900 text-nowrap font-sukhumvit"
              style={step.position}
            >
              {step.label}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-2 ${lineColor} w-[60px] sm:w-[80px] md:w-[130px] ml-0 sm:ml-0 md:ml-0 -mr-[60px] sm:-mr-[80px] md:-mr-[96px]`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
const ResultTable = ({ result }) => (
  <div className="mt-24 overflow-visible rounded-xl shadow-lg ">
    <table className="table-auto w-full mt-6 bg-[#0B293B] text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B293B] transition duration-300 font-sukhumvit">
      <thead>
        <tr className="text-white font-sukhumvit">
          <th className="px-6 py-4 text-left font-medium border-b border-gray-300 font-sukhumvit">ID</th>
          <th className="px-6 py-4 text-left font-medium border-b border-gray-300 font-sukhumvit">First Name</th>
          <th className="px-6 py-4 text-left font-medium border-b border-gray-300 font-sukhumvit">Last Name</th>
          <th className="px-6 py-4 text-left font-medium border-b border-gray-300 font-sukhumvit">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="even:bg-gray-50 odd:bg-white text-gray-800">
          <td className="border px-6 py-3 font-sukhumvit">{result.Application_id || "ไม่ระบุ"}</td>
          <td className="border px-6 py-3 font-sukhumvit">{result["ชื่อ (ภาษาอังกฤษ)"] || "ไม่ระบุ"}</td>
          <td className="border px-6 py-3 font-sukhumvit">{result["นามสกุล (ภาษาอังกฤษ)"] || "ไม่ระบุ"}</td>
          <td className="border px-6 py-3 font-sukhumvit">{result.Status || "ไม่ระบุ"}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const OdosPlatform = () => {
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const validIdRegex = /^S\d+$/;
    if (!validIdRegex.test(searchId)) {
      setError("กรุณากรอก ID ที่มีตัวอักษร 'S' ตามด้วยตัวเลข");
      setResult(null);
      setHasSearched(true);
      return;
    }
    setError("");
    setIsLoading(true);
    setHasSearched(true);

    try {
      const response = await fetch(`https://odos.thaigov.go.th:3000/api/search?searchId=${searchId}`);
      const data = await response.json();
      if (data.error) {
        setError(data.error);
        setResult(null);
      } else {
        setResult(data.length > 0 ? data[0] : null);
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav className="bg-[#ffd700]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="container-fluid">
            <a
              className="self-start text-2xl font-semibold whitespace-nowrap font-sukhumvit"
              href="#"
              style={{ color: "#003366", fontWeight: "bold" }}
            >
              ODOS Summer Camp
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 text-[#003366] mb-4 font-sukhumvit">
        <h2 className="font-serif text-2xl font-sukhumvit">
          ระบบตรวจสอบสถานะการพิจารณาโครงการหนึ่งอำเภอหนึ่งทุน
        </h2>
        <SearchForm
          searchId={searchId}
          setSearchId={setSearchId}
          handleSearch={handleSearch}
        />
        {error && (
          <p className="mt-4 text-red-600 font-sukhumvit">{error}</p>
        )}
        {isLoading && (
          <p className="mt-4 text-gray-600 font-sukhumvit">กำลังโหลด...</p>
        )}
        {hasSearched && !isLoading && result && (
          <>
            <ProgressSteps status={result.Status || "รอการพิจารณา"} />
            <ResultTable result={result} />
          </>
        )}
        {hasSearched && !isLoading && !result && (
          <p className="mt-4 text-gray-600 font-sukhumvit">
            ไม่พบข้อมูลตามรหัสที่ค้นหา
          </p>
        )}
      </div>
    </>
  );
};

export default OdosPlatform;
