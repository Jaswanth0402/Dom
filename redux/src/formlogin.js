import React, { useCallback, useState } from 'react'
import {useDispatch} from "react-redux"
import { login } from './features/user'
function Formlogin() {
   
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch =useDispatch()
    const userdispatch = useCallback((e)=>{
        e.preventDefault()
        dispatch(login({
        name,email,password
    }))
    setName('')
    setEmail("")
    setPassword("")},[name,email,password])
   
  return (
    <div>
  <form>
    <div>
        <label htmlFor='name'>Name</label><br></br>
        <input type="text" id='name' name='name' value={name} onChange={e=>{setName(e.target.value)}}/>
    </div>
    <div>
        <label htmlFor='email'>Email</label><br></br>
        <input type='email' id='email' name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div>
        <label htmlFor='password'>Password</label><br></br>
        <input type='password' id='password' name='password' value={password} onChange={e=>setPassword(e.target.value)}/>
    </div><br></br>
    <button id='button' onClick={userdispatch}>Login</button>
   
  </form>
    </div>
  )
}

export default Formlogin