import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-2xl font-medium">
        Hello
        <br />
        <span
            className="text-3xl font-semibold"
        >Divyasnh👋</span>
      </h1>
      <button
      className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-3xl'
      >Log Out.</button>
    </div>
  );
}

export default Header;
