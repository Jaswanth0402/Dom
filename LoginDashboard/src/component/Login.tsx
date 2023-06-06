import React from 'react'
import {  useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

import { useLocation, useNavigate } from "react-router";
import { useUserContext } from '../App'
function Login() {
    const { User, setUser } =useUserContext() ;
    const navigate = useNavigate();
  const location = useLocation();
    interface Userdetails {
        Email: string
        Password: any
      }
      const [data, setdata] = useState<Userdetails>({ Email: '', Password: '' })
      const handleEvent = (e: { target: { name: any; value: any } }) => {
        setdata({
          ...data,
          [e.target.name]: e.target.value,
        })
      }
      const Handleroute=()=>{
        if(data.Email ==="" || data.Password ===""){
        setUser({loggedin: false});
        }
        else{
            setUser({ loggedin: true });
            if (location.state?.from) {
                navigate(location.state.from);
              }
        }
       
      }
  return (
    <div>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="Email" placeholder="Enter email" onChange={handleEvent} />
              <Form.Text className="text-muted" id="erroremail"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="Password" placeholder="Password" onChange={handleEvent} />
              <Form.Text className="text-muted" id="errorpass"></Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={()=>Handleroute()}> Submit</Button>
          </Form>
        </Container>
      </div>
  )
}

export default Login