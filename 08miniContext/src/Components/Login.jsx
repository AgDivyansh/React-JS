import React,{ useState, useContext } from "react";
import UserContext from "../context/UserContext";


function Login() {


    const [username, setUsername] = useState("") ;
    const [password, setPassword] = useState("") ;
    
    // to give the global access from the provider 

    const {setUser} = useContext(UserContext) ;

    const handelSubmit = (e) => {
        e.preventDefault() ;
        // setUser({username, password}) ;
        setUser ( {username}) ;
        console.log(setUser);
        
        console.log(`submit button is clicked`);
        
    }


    return (
        <>

        this is not working 
            <h2>Login</h2>
            <input type="text" placeholder="username"
                value={username}

                onChange={(e) => {setUsername(e.target.value)}}

            />
            <input type="text"  placeholder="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            
            />
            <button onClick={handelSubmit} >Submit</button>
        </>
    )
}
export default Login