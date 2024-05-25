import axios from "axios";
import React, { useState } from "react";
import { url,REGISTER } from "../../api/Api";
import Cookie from "cookie-universal"
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/button.css"
import "../../css/form.css"

function Register() {

  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cookie=Cookie()
  const [err,seterr]=useState("")
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  async function handlesubmit(e){
    e.preventDefault();
  try {
      const res=await axios.post(`http://localhost:5000/api/auth/register`,{ username,email,password})
      navigate("/dashboard/users")
    } catch (error) {
      if (error.response.status==400)
      {console.log(error.response)
      seterr("the email already taken")}
      else
      seterr("enternal error")

    }
  }
  return (
    <div className="container">
      <div className="row h-100">  
        <Form className="form" onSubmit={handlesubmit}>
         <h1>register now</h1>
         <Form.Group className="nb-3" controlId="exampleForm.ControlInput0">
            <Form.Label>name</Form.Label>
            <Form.Control
              onChange={e=>setUsername(e.target.value)}
              value={username}
              name="name"
              required
              type="text"
              placeholder="enter your name..."
            />
          </Form.Group>
         <Form.Group className="nb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={e=>setEmail(e.target.value)}
              value={email}
              name="email"
              required
              type="email"
              placeholder="enter your email..."
            />
          </Form.Group>
         
          <Form.Group className="nb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>password</Form.Label>
            <Form.Control
              onChange={e=>setPassword(e.target.value)}
              value={password}
              name="password"
              required
              type="password"
              placeholder="enter your password..."
              minLength="6"

            />
          </Form.Group>
          
        <button className="btn">register</button>
        {err!==""?<p className="error">{err}</p>:""}
      </Form>
      </div> 
    </div>
  );
}

export default Register;
