import React from "react";
import LanguageTranslator from "./LanguageTranslator";

function Navbar() {
  return (
    <nav className="Sukhumvit sticky top-0 z-50 bg-[#d0e8ff] transition-colors">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="\images\Logo_nav.png"
          alt=""
          style={{ height: 50, width: 250 }}
          className="hidden md:block"
        />
        {/* <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#869bd4]">
          ODOS
          <span className="hidden sm:inline text-[white]">
            {" "}
            Summer Camp
          </span>
        </span> */}
        <div className="flex justify-end place-items-center">
          <div className="ml-4 text-[black]">
            <LanguageTranslator />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
