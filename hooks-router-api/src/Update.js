import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Apicall } from './resource/api'

import {useNavigate} from "react-router-dom"

function Update() {
    const[data,setdata] =useState({Id:"",Name:'',Email:'',Password:''})
    const navigate =useNavigate()
      
  
    const validateInput=(e)=>{
   
        setdata({
            ...data,
            [e.target.name]:e.target.value,
            
        })
        }
        useEffect(()=>{
            setdata({
                Id:localStorage.getItem("Id"),
                Name:localStorage.getItem("Name"),
                Email:localStorage.getItem("Email"),
                Password:localStorage.getItem("Password")}
                )
            
        },[])
     
const Update = async ()=>{
    let Id=data.Id
 await axios.put(Apicall+"/"+Id,{
    Name:data.Name ,
    Email:data.Email,
    Password:data.Password
    
  }
 ).then (navigate('/userdata'))
 
 navigate(0)
 
}   

  
  
    
  return (
    <div>
        <form > 
      
      <h3 className='pb-4'>Welcome to our team!!!</h3> 
        <div className=''> 
          <label htmlFor='name'>Name</label><br/>
          <input type='text'name='Name'className='input'placeholder='Enter your Name' value={data.Name}  onChange={validateInput} id='name'/>
          
 
        </div>
        <div className='pt-3'> 
          <label htmlFor='email'>Email</label><br/>
          <input type='email'name='Email'placeholder='Enter your Email'value={data.Email} onChange={validateInput} className='input' id='email'/>
         
        </div>
        <div className='pt-3'> 
          <label htmlFor='password'>Password</label><br/>
          <input type='password'name='Password'placeholder='Enter your password' value={data.Password} onChange={validateInput}  className='input' id='password'/>
          
        </div>
        
        <div className='pt-4 text-center'> 
   <input type='submit'className='button'value={"Update"} onClick={Update} />           
 </div>
        
 
        
     </form>
 
    </div>
  )
}

export default Update
