// src/components/SearchBar.jsx
import React from 'react';

function SearchBar() {
  return (
    <div className="flex justify-center mt-4 p-8">
      <input
        type="text"
        placeholder="Search Doctor, ailment, medications etc...."
        className="w-full max-w-lg px-7 py-3 font-inter text-md border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
      />
    </div>
  );
}

export default SearchBar