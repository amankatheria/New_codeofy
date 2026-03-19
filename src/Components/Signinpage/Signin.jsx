import React, { useState } from "react";
import { Eye } from "lucide-react";
import img from"../../assets/Logo.jpg"
function Signin(){
    const [showpassword, setshowpassword] = useState(false)

    return(
         <>
         <div className="flex min-h-screen">
          <div className="flex  md:w-1/2 items-center justify-center  bg-gray-100">
        <div className=" w-full max-w-md p-8 ">
            <h1 className=" text-3xl text-black font-bold uppercase">welcome to codeofy</h1>

            <p className=" text-gray-500 mt-2 mb-6 capitalize "> please your details to login in to your account </p>

            <input
                type="text"
                placeholder="username"
                className="w-full p-3 border rounded-lg mb-4 capitalize"
            />


             <input
                type="text"
                placeholder="enter your enail"
                className="w-full p-3 border rounded-lg mb-4 capitalize"
            />
         <div className=" relative">
            <input
                type={showpassword ? "text":"password"}
                placeholder=" password"
                className="w-full p-3 border rounded-lg mb-4 capitalize"
            />
           <button onClick={()=>setshowpassword(!showpassword)} className="absolute right-3 top-3 text-gray-500">
              {showpassword ? "Hide" : <Eye size={21} />}

            </button>
        
            </div>

            <div className=" flex items-center justify-between mb-4">
                <label className="text-sm font-sans ">
                    <input
                        type="checkbox"
                        className="mr-2">
                    </input>
                    Remember me
                </label>


                <button className="text-sm text-blue-700">
                    Forgot password
                </button>
            </div>

            <button className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold capitalize">
                login
            </button>

          
            <button className=" text-center text-sm mt-6 capitalize hover:text-blue-700 mr-6"> create a new account ?
                <span className="text-blue-600 ml-1 capitalize hover:text-black"> Login up for free</span>
            </button>
        </div>
    </div>
   

   <div className="hidden md:block md:w-1/2">
        <img
          src={img}
          alt="login"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

    </div>
         
         
         
         
         </>
    )
} 
export default Signin;