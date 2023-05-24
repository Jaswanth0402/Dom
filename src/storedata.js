import React from 'react'
import {useSelector} from "react-redux"
import "./storedata.css"
function Storedata() {
    const user =useSelector(state=>state.user.value)
  return (
    <div>
        <table>
            <thead>
            <tr>
                
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
            </tr>
            </tbody>
        </table>
       
    </div>
  )
}

export default Storedata