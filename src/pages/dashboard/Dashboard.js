import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../component/dashboard/Sidebar";
import Topbar from "../../component/dashboard/Topbar";
import './dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <Topbar />
      <div className="page">
      <Sidebar />
      <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
