import axios from "axios";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import {Outlet } from "react-router-dom";
import { url } from "../../api/Api";
import { Axios } from "../../api/Axios";
function Requireauth() {
  const cookie = Cookie();
  const [user, setuser] = useState();

  useEffect(() => {
    Axios
      .get(`${url}/user`)
      .then((data) => setuser(data.data))
      .catch(() =>(error) => console.log(error));
  }, []);
  return <Outlet/>
}

export default Requireauth;
