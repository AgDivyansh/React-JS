import React from "react";

function AllTask() {
  return (
    <div
      // className=' mt-5 rounded '
      id="alltasklist"
      className="mt-5 bg-[#1C1C1C] p-5 rounded h-40 overflow-auto"
    >
      {/* All Task */}
      <div className=" py-2 px-4 flex justify-between bg-red-400 mb-2 rounded">
        <h2>Divyansh</h2>
        <h3>Make UI Design</h3>
        <h5>Status.</h5>
      </div>
      <div className=" py-2 px-4 flex justify-between bg-green-400 mb-2 rounded">
        <h2>Divyansh</h2>
        <h3>Make UI Design</h3>
        <h5>Status.</h5>
      </div>
      <div className=" py-2 px-4 flex justify-between bg-yellow-400 mb-2 rounded">
        <h2>Divyansh</h2>
        <h3>Make UI Design</h3>
        <h5>Status.</h5>
      </div>
      <div className=" py-2 px-4 flex justify-between bg-blue-400 mb-2 rounded">
        <h2>Divyansh</h2>
        <h3>Make UI Design</h3>
        <h5>Status.</h5>
      </div>
      <div className=" py-2 px-4 flex justify-between bg-purple-400 mb-2 rounded">
        <h2>Divyansh</h2>
        <h3>Make UI Design</h3>
        <h5>Status.</h5>
      </div>
    </div>
  );
}

export default AllTask;
