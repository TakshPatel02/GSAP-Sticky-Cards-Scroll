import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-12 py-8 text-sm uppercase">
      <div className="text-[#e7e6e7] flex items-center gap-8 leading-3.5 tracking-wider">
        <h1 className="font-medium">Sticky sections</h1>
        <p className="text-[#9d9a9b]">Article</p>
        <p className="text-[#9d9a9b]">All demos</p>
        <p>Subscribe to our frontend news</p>
      </div>
      <div className="text-[#9d9a9b]">
        <h1>Droip: The Next Big Revolution in WordPress</h1>
      </div>
    </div>
  );
};

export default Navbar;
