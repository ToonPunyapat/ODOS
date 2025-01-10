import React from 'react'

function Navbar() {
  return (
<nav class="bg-[#0B293B]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-4xl font-semibold whitespace-nowrap text-[#FFF200]">ODOS</span>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] md:p-0">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] md:p-0">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] md:p-0">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FFF200] md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar