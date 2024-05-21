import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Axios } from "../../api/Axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [users, setusers] = useState([]);
  const [delet, setdelet] = useState(false);

  useEffect(() => {
    axios.get(`/api/users`)
      .then((data) => setusers(data.data))
      .catch((err) => console.log(err));
  }, [delet]);
  const usershow = users.map((user, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <div className="d-flex gap-3 justify-content-center align-items-center ">
          <Link to={`${user.id}`}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          <FontAwesomeIcon
            onClick={() => handeldelete(user.id)}
            style={{ color: "red", cursor: "pointer" }}
            icon={faTrash}
          />
        </div>
      </td>
    </tr>
  ));
  async function handeldelete(id) {
    try {
      const res = await Axios.delete(`user/${id}`);
      setdelet((prev) => !prev);
    } catch (error) {}
  }
  return (
    <div className="bg-white w-100 p-2">
      <h1>users</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th> email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>{usershow}</tbody>
      </Table>
    </div>
  );
}

export default Users;
