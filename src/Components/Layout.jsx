import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
      <>
       <div className=' h-full w-full overflow-hidden'>
      <Navbar/>
      <Outlet/>
      
      </div>
      </>
    )
}
export default Layout