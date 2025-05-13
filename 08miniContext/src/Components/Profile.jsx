import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {

    const {user} = useContext(UserContext) ;
    console.log(`this is value we get after submiting the form `);
    console.log(user);
    
    
  if (!user)
  {
    console.log(`if condition se return ho raha haa:`);
    
    return (
        <div>Please Login.</div>
    )
  }
  console.log(`yaha se return ni hua !`);
  
  return (
    <div>
        Welcome {user.username}
    </div>
  )
}

export default Profile
