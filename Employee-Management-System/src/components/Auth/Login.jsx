import React, { useState } from "react";

const Login = ({ handelLogin }) => {
  console.log(`handel login ke value ->`);
  
  console.log(handelLogin);
  
  const submitHandler = () => {
    // e.preventDefault() ;
    // console.log(`form submit hoo gaya.`);
    // console.log(`User email is : ${email}`);
    // console.log(`User password is: ${password}`);
      // passing email and password to the parent for the verificaiton of the login 
    handelLogin(email, password) ;
    setEmail("") ;
    setPassword("") ;

  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(`first it was set as prevent default then it navigates to the submitHandler function`);

            submitHandler();
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
                // console.log(e.target.value);
                setEmail(e.target.value)}}
            placeholder="Enter your email"
            className="  outline-none
          bg-transparent border-2 border-emerald-600 rounded-full
          py-4 px-5 text-xl placeholder:text-gray-400"
          />

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="  outline-none
          bg-transparent border-2 border-emerald-600 rounded-full mt-3
          py-4 px-5 text-xl placeholder:text-gray-400"
          />
          <button
            className="mt-5 text-white outline-none border-none bg-emerald-600 rounded-full
          py-4 px-5 text-xl placeholder:text-white"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
