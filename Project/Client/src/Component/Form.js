import React, { useEffect, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';
function Form() {
    const [Name,setName]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [contactvalue,setContact]=useState('')
   const navigate =useNavigate()
   const {id} =useParams()
  
   useEffect(()=>{
    if(id){
     axios.get(`http://localhost:3000/get/${id}`)
    .then((resp)=>{ 
        console.log(resp)
        setName(resp.data[0].Name)
        setEmail(resp.data[0].Email)
        setPassword(resp.data[0].Password)
        setContact(resp.data[0].contact)
    });
}
   
    },[id])

    const handleSubmit =(e)=>{
       e.preventDefault();
       let name =Name; 
       let email =Email; 
       let password =Password; 
       let contact = contactvalue; 
       if(!name || !email || !password || !contact){
          alert("Please provide value for each input fields")
       }
       else{
        if(!id){
            axios.post('http://localhost:3000/create',{
                name,
                email,
                password,
                contact
               })
               .then(()=>{
               
                setName('')
                setContact('')
                setPassword('')
                setEmail('')
               })
               .catch((error)=>{
                 console.log(error);
               })
              
        //   alert('User Details Added sucessfully')
     }
        else{
            
       axios.put(`http://localhost:3000/update/${id}`,{
        name,
        email,
        password,
        contact
       })
       .then(()=>{
        
        setName('')
        setContact('')
        setPassword('')
        setEmail('')
       })
       .catch((error)=>{
         console.log(error);
       })
        //   alert('User Details updated sucessfully')
       }
    }
    setTimeout(() => {
               
        navigate('/')
        
               }, 500)
      
    }
    
  return (
    <div className='formgroup'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='block'>
            <div >
                <label id='Name'>Name</label><br></br>
                <input type='text' className='input' name='Name' value={Name || ''} onChange={(event)=>{setName(event.target.value)}}  />
            </div>
            <div>
                <label id='Name'>Email</label><br></br>
                <input type='email' className='input' name='Email' value={Email ||''} onChange={(event)=>{setEmail(event.target.value)}} />
            </div>
            <div>
                <label id='Name'>Password</label><br></br>
                <input type='password' className='input' name='Password' value={Password || ''} onChange={(event)=>{setPassword(event.target.value)}} />
            </div>
            <div >
                <label id='Name'>Contact No</label><br></br>
                <input type='text' className='input' name='contact' value={contactvalue || ''} onChange={(event)=>{setContact(event.target.value)}} />
            </div>
            <div style={{marginTop:'3%'}}>
               <input type='submit' id='button' value={id?'Update':'Submit'}/>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Form