import React from 'react'

function Navbar() {
  return (
<nav class="bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-4xl font-semibold whitespace-nowrap text-[#FFF200]">ODOS</span>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-[#FFF200] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] rounded md:bg-transparent md:text-[#FFF200] md:p-0 dark:text-[#FFF200] md:dark:text-[#FFF200]" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] rounded hover:text-[#FFF200] md:hover:bg-transparent md:border-0 md:hover:text-[#FFF200] md:p-0 dark:text-[#FFF200] md:dark:hover:text-[#FFF200] dark:hover:bg-gray-700 dark:hover:text-[#FFF200] md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] rounded hover:text-[#FFF200] md:hover:bg-transparent md:border-0 md:hover:text-[#FFF200] md:p-0 dark:text-[#FFF200] md:dark:hover:text-[#FFF200] dark:hover:bg-gray-700 dark:hover:text-[#FFF200] md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] rounded hover:text-[#FFF200] md:hover:bg-transparent md:border-0 md:hover:text-[#FFF200] md:p-0 dark:text-[#FFF200] md:dark:hover:text-[#FFF200] dark:hover:bg-gray-700 dark:hover:text-[#FFF200] md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] rounded hover:text-[#FFF200] md:hover:bg-transparent md:border-0 md:hover:text-[#FFF200] md:p-0 dark:text-[#FFF200] md:dark:hover:text-[#FFF200] dark:hover:bg-gray-700 dark:hover:text-[#FFF200] md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar