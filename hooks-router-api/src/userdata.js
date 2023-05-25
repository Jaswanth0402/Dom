import { Apicall } from './resource/api';
import { useEffect,useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import "./userdata.css"
function Userdata(){
   
const [apidata,setapidata]=useState([])
 const navigate = useNavigate()
      const getApidata=async()=>{
        const valuedata= await axios.get(Apicall)
        setapidata(valuedata.data)
        console.log(valuedata);
      }
       useEffect(()=>{
        getApidata();
         },[])
    const onDelete =async(ele)=>{
        let id=ele.id
        await axios.delete(Apicall +"/"+id)
        .then(()=>{
            getApidata();
        })
    }
const  storedata =(ele)=>{
    
    localStorage.setItem("Id",ele.id)
    localStorage.setItem("Name",ele.Name)
    localStorage.setItem("Email",ele.Email)
    localStorage.setItem("Password",ele.Password)
   navigate("/update")
    console.log((ele))
}

return(
    <>
    
    <div className='mt-5 mx-5'>
    <button  style={{backgroundColor:"blue",border:"1px"}}><Link style={{color:"white"}} to={"/"}>Back</Link></button>
    <table className='text-center container-fluid mt-2 ' id='table'  >
        <thead>
            <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit & Delete</th>
            </tr>
        </thead>
        <tbody>
        {apidata.map((ele)=>(
            <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.Name}</td>
                <td>{ele.Email}</td>
                <td>{ele.Password}</td>
                <td><button style={{backgroundColor:"orange"}} onClick={()=>storedata(ele)}> Update</button>    <button style={{backgroundColor:"red"}} onClick={()=>onDelete(ele)}>Delete</button></td>
            </tr>
        ))}
            
        </tbody>
    </table>
    </div>
    </>
)

        }

        export default Userdata;
        