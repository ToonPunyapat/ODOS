import React, { useState } from "react";

function Navbar() {
  return (
    <nav className="bg-[#0B293B] Sukhumvit">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-[#FFF200]">
          ODOS
          <span className="hidden sm:inline"> Summer Camp</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
