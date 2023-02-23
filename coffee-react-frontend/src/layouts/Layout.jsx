import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar.jsx";
import Summary from "../components/Summary.jsx";
import useCoffee from "../hooks/useCoffee.js";
import Modal from "react-modal";
import ModalProduct from "../components/ModalProduct.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuth} from "../hooks/useAuth.js";

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

Modal.setAppElement("#root");

export default function layout() {

    const {modal} = useCoffee();
    const {user, error} = useAuth({middleware: 'auth'});

    console.log(user);
    console.log(error);

  return (
      <>
      <div className="md:flex">
          <Sidebar />
          <main className={"flex-1 h-screen overflow-y-scroll bg-gray-100 p-3"}>
              <Outlet />
          </main>
          <Summary />
      </div>

          <Modal
              isOpen={modal}
              style={customStyles}
              contentLabel="Example Modal"
          >
              <ModalProduct />
          </Modal>

          <ToastContainer />

      </>
  )
}
