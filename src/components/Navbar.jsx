import React, { useState } from "react";

function Navbar({ onLanguageChange }) {
  const [language, setLanguage] = useState("EN");

  const handleToggleLanguage = () => {
    const newLanguage = language === "EN" ? "TH" : "EN";
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <nav className="bg-[#0B293B] Sukhumvit sticky top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#FFF200]">
          ODOS
          <span className="hidden sm:inline"> Summer Camp</span>
        </span>
        <button
          className="text-white bg-[#0B293B] border border-[#FFF200] rounded px-4 py-2 hover:bg-[#FFF200] hover:text-[#0B293B]"
          onClick={handleToggleLanguage}
        >
          {language === "EN" ? "English" : "ไทย"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
