import React from "react";
import { useState } from "react";
import {Eye } from "lucide-react";

function Login() {
    const [showpassword, setshowpassword] = useState(false)
    const icon = [
        {
        logo: "https://img.freepik.com/premium-vector/google-logo-icon-transparent-background_1273375-1570.jpg?semt=ais_rp_progressive&w=740&q=80",
        text: "google"
        },
{
       logo:"https://img.freepik.com/premium-vector/round-facebook-logo-isolated-white-background_469489-897.jpg?semt=ais_hybrid&w=740&q=80",
        text: "Facebook"
}
    ]
return (

    <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">
        <div className=" w-full max-w-md p-8">
            <h1 className=" text-3xl text-black font-bold uppercase">welcome to codeofy</h1>

            <p className=" text-gray-500 mt-2 mb-6 capitalize "> please your details to sign in to your account </p>

            <input
                type="text"
                placeholder="email your username"
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
                sign in
            </button>

            <div className="text-center text-gray-400 my-6 capitalize">
                or continue me
            </div>
            <div className=" flex gap-4">
                {icon.map((item) => {
                    return (
                        <button className="w-1/2 border py-2 rounded-lg  flex items-center justify-center gap-2">
                            <img src={item.logo} className="w-5 h-5" />
                            {item.text}
                        </button>
                    )

                })}
            </div>
            <p className=" text-center text-sm mt-6 capitalize">don't have an account ?
                <button  className="text-blue-600 ml-1 capitalize"> sign up for free</button>
            </p>
        </div>
    </div>

)
}
export default Login;