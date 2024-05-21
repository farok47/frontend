import axios from "axios";
import React, { useState } from "react";
import { url, LOGIN } from "../../api/Api";
import Cookie from "cookie-universal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate=useNavigate()
  const cookie = Cookie();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, seterr] = useState("");


  
  async function handlesubmit(e) {
    e.preventDefault();
    try {
     await axios.post(`http://localhost:5000/api/auth/login
      `, {email,password});
      navigate("/dashboard/users")
      console.log(cookie);
    } catch (error) {
      if (error.response.status === 400) seterr("email or password is wrong");
      else seterr("enternal server error");
      console.log(error)
    }
  }
  return (
    <div className="container">
        <div className="row "style={{height:"100vh"}}>
        <Form className="form" onSubmit={handlesubmit}>
          <h1>Login now</h1>

          
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
          <button className="btn">login</button>
          {err !== "" ? <p className="error">{err}</p> : ""}
        </Form>
      </div>
    </div>
  );
}

export default Login;
