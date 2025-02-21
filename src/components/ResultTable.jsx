import React from "react";

const ResultTable = ({ result }) => (
  <div className="mt-24 overflow-visible rounded-xl shadow-lg">
    <div className="w-full">
      <table className="table-auto w-full mt-6 bg-[#0B293B] text-xs sm:text-sm border rounded-xl font-sukhumvit">
        <thead>
          <tr className="text-white">
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">รหัสผู้สมัคร</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">ชื่อ</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">นามสกุล</th>
            <th className="px-2 sm:px-6 py-2 sm:py-4 text-left font-medium border-b border-gray-300">สถานะ</th>
          </tr>
        </thead>
        <tbody>
          <tr className="even:bg-gray-50 odd:bg-white text-gray-800">
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result.Application_id || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result["ชื่อ (ภาษาอังกฤษ)"] || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result["นามสกุล (ภาษาอังกฤษ)"] || "ไม่ระบุ"}</td>
            <td className="border px-2 sm:px-6 py-2 sm:py-3">{result.Status || "ไม่ระบุ"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ResultTable;