import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import {useNavigate} from "react-router-dom"
function Login() {
  const navigate=useNavigate()
    interface Userdetails{
        Email:string;
        Password:any;
    }
    const[data,setdata] =useState<Userdetails>({Email:'',Password:''})
   
    const handleEvent=(e: { target: { name: any; value: any; }; })=>{
     
     setdata({
         ...data,
         [e.target.name]:e.target.value,
         
     })
     }

 const validateUser =(e: React.FormEvent<HTMLButtonElement>)=>{
  let final=true
   e.preventDefault()
   validateEmail()
   validatePassword()
   if(!validateEmail() ||!validatePassword()){
    final =false

  }
  else{
    navigate("/dashboard")
   return final

  }
 }
 const validatePassword=()=>{
  let value=true;
  
   let passvalue =data.Password
   let errorpass =document.getElementById("errorpass") as HTMLHtmlElement
   
  
   if(passvalue===""){
   errorpass.innerHTML="must fill Password"
   value= false
   }
   else{
    errorpass.innerHTML=""
    value =true
   }
   return value

 }
const validateEmail=()=>{

  let valueemail =true
  let emailvalue =data.Email
  let erroremail =document.getElementById("erroremail") as HTMLHtmlElement
  if(emailvalue ===""){
    erroremail.innerHTML="must fill email"
    valueemail= false
   }
   else{
    erroremail.innerHTML=""
    valueemail =true
   }
   return valueemail
}
  return (
    <div>
      <Container>
     <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='Email'  placeholder="Enter email" onChange={handleEvent} />
        <Form.Text className="text-muted" id='erroremail'>
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='Password' placeholder="Password" onChange={handleEvent}/>
        <Form.Text className="text-muted" id='errorpass'>
         
        </Form.Text>
      </Form.Group>
      
    <Button variant="primary" onClick={(event)=>validateUser(event)} >
        Submit
      </Button>
    </Form>
  </Container>
    </div>
  )
}

export default Login