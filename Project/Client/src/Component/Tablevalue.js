import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom';
export default function Uservalue() {
    const [data,setData]=useState([])
    const datavalue =async()=>{
      const response =await axios.get('http://localhost:3000/get');
      setData(response.data);
      
      }
    useEffect(()=>{
        datavalue()
    },[])

    const remove =(id)=>{
       
        if(window.confirm("Are you confirm to delete details?")){
            axios.delete(`http://localhost:3000/remove/${id}`);
            alert('details removed sucessfully');
            setTimeout(()=>{
                datavalue() 
            },500)
        }

    }
    
  return (
    <div> 
       <center>
       <Link to={'/adddetails'}><button style={{margin:'2%'}}>Add User</button></Link>
       </center>
        <table>
            <thead>
                <tr>
                    <th className='head'>Id</th>
                    <th className='head'>Name</th>
                    <th className='head'>Email</th>
                    <th className='head'>Password</th>
                    <th className='head'>Contact_No</th>
                    <th className='head'>Action</th>
                </tr>
            </thead>
            <tbody>
            {data.map((ele,index)=>(
            <tr key={ele.id}>
                <td>{index+1}</td>
                <td>{ele.Name}</td>
                <td>{ele.Email}</td>
                <td>{ele.Password}</td>
                <td>{ele.contact}</td>
                <td style={{width:'100%',}}><span><Link to={`/update/${ele.id}`}><button style={{backgroundColor:"orange",border:'none',padding:'2%',marginLeft:'4px'}} > Update</button></Link><button style={{backgroundColor:"red",border:'none',padding:'2%',marginLeft:'4px'}} onClick={()=>{remove(ele.id)}} >Delete</button></span></td>
            </tr>
        ))}
            </tbody>
        </table>
    </div>
  )
}
