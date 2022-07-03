import React from 'react'
import { useSelector } from 'react-redux'; //useselctor is used for getting the value of a state

function Profile() {
  const user = useSelector((state)=>state.user.value); //The state in (), is an access to all the state, then you narrow it down to the name of the state you want to achieve 
  return (
    <div>Profile
         <p>Name:{user.name}</p>
         <p>Email:{user.email}</p>
         <p>Age:{user.age}</p>

    </div>
  )
}

export default Profile