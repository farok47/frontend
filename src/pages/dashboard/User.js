import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Axios } from "../../api/Axios";

function User() {
  const param=useParams()
  console.log(param)
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [disable,setdisable]=useState(true)
  const id = Number(window.location.pathname.replace("/dashboard/users/", ""));

  useEffect(() => {
    axios.get(`/api/users/${id}`)
    .then((data) =>{ 
      setname(data.data.name);
      setemail(data.data.email)}
    ).then(()=>setdisable(false))
    .catch(err=>console.log(err))
  },[]);
console.log(id)
  async function handlesubmit(e){
    e.preventDefault()
    try {
      const res=await Axios.put(`api/users/${id}`,{name:name,email:email})
     window.location.pathname="/dashboard/users/"
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Form  className="bg-white w-100 mx-2 formu" onSubmit={handlesubmit}>
        <h1>user</h1>
        <Form.Group className="nb-3" controlId="exampleForm.ControlInput0">
          <Form.Label>name</Form.Label>
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            value={name}
            name="name"
            required
            type="text"
            placeholder="enter your name..."
          />
        </Form.Group>
        <Form.Group className="nb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setemail(e.target.value)}
            value={email}
            name="email"
            required
            type="email"
            placeholder="enter your email..."
          />
        </Form.Group>
        <button disabled={disable} type="submit" className="btn">save</button> 
      </Form>
  </>
    );
}

export default User;
