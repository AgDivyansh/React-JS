import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard() {
  return (
    <div className="h-screen w-full p-7">
      <Header />
        {/* <AllTask /> */}
        <CreateTask />
        {/* <AllTask /> */}
      {/* <div>
        <form
            className="flex flex-wrap items-center justify-between"
        >
          <div 
            className="w-1/2"
          >
            <h3>Task title</h3>
            <input type="text" />
          
            <h3>Date</h3>
            <input type="date" />
          
            <h3>Assign to.</h3>
            <input type="text" name="" id="" placeholder="Employee Name" />
          
            <h3>Category.</h3>
            <input type="text" name="" id="" placeholder="Design, Dev, etc." />
          </div>
          <div className="w-1/2">
            <h3>Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description of the task"
            ></textarea>
          </div>
          
          <button>Create Task.</button>
        </form>
      </div> */}
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
// <Header />
