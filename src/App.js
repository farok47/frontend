import "./App.css";
import Homepage from "./component/website/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Users from "./pages/dashboard/Users";
import Dashboard from "./pages/dashboard/Dashboard";
import Requireauth from "./pages/auth/Requireauth";
import User from "./pages/dashboard/User";
import NewProduct from "./pages/website/NewProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route element={<Requireauth />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="newproduct" element={<NewProduct />} />
          
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
