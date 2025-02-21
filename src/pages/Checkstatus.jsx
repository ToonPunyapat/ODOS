import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import ProgressSteps from "../components/ProgressSteps";
import ResultTable from "../components/ResultTable";

const Checkstatus = () => {
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
    <div className="Sukhumvit">
      <Navbar hideLanguageTranslator={false} />
      <div className="container mx-auto py-8 px-4 text-[#003366] mb-4 font-sukhumvit">
        <h2 className="font-serif text-2xl font-sukhumvit">
          ระบบตรวจสอบสถานะการพิจารณาโครงการหนึ่งอำเภอหนึ่งทุน
        </h2>
        <SearchForm searchId={searchId} setSearchId={setSearchId} handleSearch={handleSearch} />
        {error && <p className="mt-4 text-red-600 font-sukhumvit">{error}</p>}
        {isLoading && <p className="mt-4 text-gray-600 font-sukhumvit">กำลังโหลด...</p>}
        {hasSearched && !isLoading && result && (
          <>
            <ProgressSteps status={result.Status || "รอการพิจารณา"} />
            <ResultTable result={result} />
          </>
        )}
        {hasSearched && !isLoading && !result && (
          <p className="mt-4 text-gray-600 font-sukhumvit">ไม่พบข้อมูลตามรหัสที่ค้นหา</p>
        )}
      </div>
    </div>
  );
};

export default Checkstatus;
