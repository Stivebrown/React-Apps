import React from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Outlet} from 'react-router-dom';
import NavBar from "../component/NavBar";

const MainLayout = () => {
  return (
     <>
     <NavBar/>
     <Outlet/>
     <ToastContainer/>
     </>
  )
}

export default MainLayout