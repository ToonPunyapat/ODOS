import React from "react";
import LanguageTranslator from "./LanguageTranslator";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="Sukhumvit sticky top-0 z-50 bg-black dark:bg-white transition-colors">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-4xl font-semibold whitespace-nowrap text-red-500 dark:text-red">
          ODOS
          <span className="hidden sm:inline text-white dark:text-black">
            {" "}
            Summer Camp
          </span>
        </span>
        <div className="flex justify-end place-items-center">
          <ThemeToggle />
          <div className="ml-4 text-white dark:text-black">
            <LanguageTranslator />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
