import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar.jsx";
import Summary from "../components/Summary.jsx";

export default function layout() {
  return (

      <div className="md:flex">
          <Sidebar />
          <main className={"flex-1 h-screen overflow-y-scroll bg-gray-100 p-3"}>
              <Outlet />
          </main>
          <Summary />
      </div>
  )
}
