import {Link } from 'react-router-dom';
import './login.css';
import Nav from './Nav';
import { Apicall } from './resource/api';
import { useEffect,useState } from 'react';
import axios from 'axios';


function Login(){
  const [data,setdata]=useState({CPassword:'',Email:''})
   const handleData =(e)=>{
    setdata({
      ...data,
      [e.target.name]:e.target.value
    
    })
   
    
   }
  //  let toggle = document.getElementById("show")
  //  let password = document.getElementById("password")
  //  toggle.addEventListener("click",function(){
    
  //    if(password.type ==='password'){
  //      password.type ="text"
      
  //    }
  //    else{
  //      password.type ="password"
  //      }
  //      toggle.classList.toggle("fa-eye");
  //  })
  // const [apidata,setapidata]=useState([])
 
  //     const getApidata=async()=>{
  //       const valuedata= await axios.get(Apicall)
  //       setapidata(valuedata.data)
  //     }
  //      useEffect(()=>{
  //       getApidata();
  //        },[])
  //   const [error,setError] = useState('')
    
  //    const validatelogin=(e)=>{
      
  //     e.preventDefault();
     
  //   let Emaildata =data.Email;
  //   let Passowrddata = data.CPassword;
  //    apidata.some((ele)=>{
  //    if(Emaildata===""||Passowrddata===""){
     
  //     setError("Fill th valid Email and password")
  //    }
  //    else if( (ele.Email ===Emaildata) && (ele.CPassword ===Passowrddata)){

  //     console.log(data.Email,data.CPassword);
  //     setError("")
  //     setdata({CPassword:'',Email:''})
  //    }
  //    else{
  //     console.log('not same')
     
  //     setError("You Create account First")
     
  //    }
    
  //   })
     
  //    }

return(
  <div>
    <div className='stick'>
    <Nav/>
    </div>
    
    
    
    <div className='container  common '>
      
        <form  >

          <div className=''> 
               <label htmlFor='email'>Email</label><br/>
               <input type='email'name='Email'value={data.Email} onChange={handleData} placeholder='Enter your Email' className='input' id='email'/>
          </div>
          <div className='pt-3'> 
               <label htmlFor='password'>Password</label><br/>
               <input type='password' name='CPassword'value={data.CPassword} onChange={handleData} placeholder='Enter your password'className='input' id='password'/>
          </div>
          <div className='pt-4 text-center'> 
          <input type='submit'className='button'value={"Log in"} />
          </div>
         
          <p className='text-center'>
          Don't have an account?  <Link  to='/signup' >Signup </Link>
          </p>
          
      </form>



    </div>
    </div>
)

}



export default Login;