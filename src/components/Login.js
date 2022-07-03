import React from 'react'
import {useDispatch} from 'react-redux'; // use for altering the value of a state 
import {login} from '../features/user';

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
        <button
        onClick={()=>dispatch(login({name: "Vicktor", age:30, email:"victor@gmail.com"}))}
        >Login</button>
    </div>
  )
}

export default Login