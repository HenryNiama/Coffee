import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar.jsx";
import Summary from "../components/Summary.jsx";
import useCoffee from "../hooks/useCoffee.js";
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export default function layout() {

    const {modal, handleClickModal} = useCoffee();

  return (
      <>
      <div className="md:flex">
          <Sidebar />
          <main className={"flex-1 h-screen overflow-y-scroll bg-gray-100 p-3"}>
              <Outlet />
          </main>
          <Summary />
      </div>

          {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Modal</h2>
                    <button onClick={handleClickModal}>Close</button>
                    <div>I am a modal</div>
                </Modal>
            )}
      </>
  )
}
