import React from "react";
import img from"../../assets/img.webp"
import Login from "./Login";
function Card(){
    return(
      <div className="flex min-h-screen">
                <div
                    className="hidden md:flex w-1/2 bg-cover bg-center relative rounded-2xl"
                    style={{
                        backgroundImage:
                            `url(${img})`,
                    }}>
                        
                        </div>
                      <Login/>
                    </div>
                    
    )
}
export default Card;