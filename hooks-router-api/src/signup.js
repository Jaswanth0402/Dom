import './signup.css';
import React,{useState} from 'react';
import { Apicall } from './resource/api';
import axios from 'axios';
import Nav from './Nav';
import { Link } from 'react-router-dom';
function Signup(){
  const[data,setdata] =useState({Name:'',Email:'',Password:'',CPassword:''})
   
  const validateInput=(e)=>{
   
   setdata({
       ...data,
       [e.target.name]:e.target.value,
       
   })
   }
   const [error,setError] = useState('')
   const validateusername= ()=>{
   
   let username =data.Name;
  let uservalue =true;
  if(username ===""){
    uservalue =false;
      setError(
        "Username is invalid")
   }
   else{
    setError("")
      }
      return uservalue  ;
    }
    const [emailerror,setemailError]=useState('')
      const validateemail =()=>{
      let email = data.Email;
       let value =true;
      let  emailregex =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if(email ===""){
        value=false;
        setemailError(
          "Please Enter your email ")
     }
     else if(!(emailregex.test(email))){
      value=false;
      setemailError(
        "Email is invalid")
     }
     else{
      setemailError("")
        }
        return value;
   }
   const [passworderror,setpasswordError]=useState('')
      const validatepassword =()=>{
      let password = data.Password;
       let passvalue =true;
      if(password ===""){
        passvalue=false;
        setpasswordError(
          "Please Enter your Password ")
     }
     else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
      passvalue=false;
      setpasswordError(
        "Password is invalid")
   

     }
     else{
      setpasswordError("")
        }
        return passvalue;
   }
   const [cpassworderror,setcpasswordError]=useState('')
   const validatecpassword= ()=>{
    let cpassword =data.CPassword;
    let Password = data.Password
   let cpassvalue =true;
   if(cpassword === ""){
    cpassvalue =false;
    setcpasswordError("Please Enter your password")
   }
   else if(!(cpassword === Password)){
     cpassvalue =false;
       setcpasswordError(
         "Passowrd & Confirm Password must be same")
    }
    else{
     setcpasswordError("")
       }
       return cpassvalue  ;
     }
     
   const validate= async(e)=>{
    e.preventDefault();
    validateemail();
    validateusername();
    validatepassword();
    validatecpassword();
    let final =true;
    if(!validateemail() || !validateusername()||!validatepassword()||!validatecpassword()){
      final =false
    }
    else{
       await axios.post(Apicall,{
      Name:data.Name ,
       Email:data.Email,
       Password:data.Password,
       CPassword:data.CPassword
       })

        setdata({Name:'',Email:'',Password:'',CPassword:''})
     
    }
    
    return final;
    
   }

return(
  <div >
    <div className='stick'>
    <Nav/>
    </div>
      
   
  <div className='container mt-5 pt-3 mb-5'>

    <form > 
      
     <h3 className='pb-4'>Welcome to our team!!!</h3> 
       <div className=''> 
         <label htmlFor='name'>Name</label><br/>
         <input type='text'name='Name'className='input'placeholder='Enter your Name' value={data.Name} onChange={validateInput} onKeyUp={validateusername} id='name'/>
         <p className='error'>{error}</p>

       </div>
       <div className='pt-3'> 
         <label htmlFor='email'>Email</label><br/>
         <input type='email'name='Email'placeholder='Enter your Email'value={data.Email} onChange={validateInput} onKeyUp={validateemail} className='input' id='email'/>
         <p className='error'>{emailerror}</p>
       </div>
       <div className='pt-3'> 
         <label htmlFor='password'>Password</label><br/>
         <input type='password'name='Password'placeholder='Enter your password' value={data.Password} onChange={validateInput} onKeyUp={validatepassword} className='input' id='password'/>
         <p className='error'>{passworderror}</p>
       </div>
       <div className='pt-3'> 
         <label htmlFor='cpassword'>Confirm Password</label><br/>
         <input type='password'name='CPassword'placeholder='Enter your password'value={data.CPassword} onChange={validateInput} onKeyUp={validatecpassword} className='input' id='cpassword'/>
         <p className='error'>{cpassworderror}</p>
       </div>
       <div className='pt-4 text-center'> 
          <input type='submit'className='button'value={"Signup"} onClick={(event)=>{validate(event)}} />
       </div>
       

       <p className='text-center pt-3'>Alreay have an account?  <Link  to='/login' >Login </Link></p>
    </form>

  </div>  
  </div>





)


}












export default Signup;