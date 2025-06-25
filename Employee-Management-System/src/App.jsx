import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocatStorage, setLocalStorage } from "./utils/lolcalStorage";

function App() {
  useEffect(() => {
    setLocalStorage();
    getLocatStorage();
  }, []);

  const [user, setUser] = useState('Divyansh');

  const handelLogin = (email, password) => {
    // console.log(`value of emial and password :`);

    // console.log(email, password);

    if (email == "admin@me.com" && password == "123") {
      // console.log(`This is Admin`);
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      // console.log(`This is User`);
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  // handelLogin('admin@me.com', '123') ;
  // handelLogin() ;

  console.log(`by default user ke value kya aa rahi haa ${user}`);
  return (
    <>
      <Login />
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      
      {/* {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> } */}
      {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> }
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
