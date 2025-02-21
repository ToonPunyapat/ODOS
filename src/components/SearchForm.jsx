import React from "react";

const SearchForm = ({ searchId, setSearchId, handleSearch }) => (
  <form onSubmit={handleSearch} className="mb-3 mt-6 space-y-2">
    <label htmlFor="search_id" className="block text-gray-700 font-sukhumvit">
      รหัสผู้สมัคร:
      <input
        type="text"
        id="search_id"
        name="search_id"
        className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 font-sukhumvit"
        placeholder="กรุณากรอกรหัสการสมัครของท่าน"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
    </label>
    <button
      type="submit"
      className="w-16 md:w-16 px-2 py-2 bg-[#0e131a] text-white font-sukhumvit rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 font-sukhumvit"
    >
      ค้นหา
    </button>
  </form>
);
export default SearchForm;