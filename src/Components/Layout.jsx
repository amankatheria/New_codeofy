import React from "react";
import Navbar from "./Navbar";
import Header from "./Footer";
import { Outlet } from "react-router-dom";
import Login from "./Login";
function Layout(){
    return(
      <>
       <div className=' h-full w-full overflow-hidden'>
      <Navbar/>
      <Outlet/>
      <Header/>
      <Login/>
      </div>
      </>
    )
}
export default Layout