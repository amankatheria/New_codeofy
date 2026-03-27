import React from "react";
import { MdOutlineVerified } from "react-icons/md";
function Home() {
    return (
        <>
            <section className="text-white  bg-gradient-to-br from-blue-200 to-gray-200">
                <div className=" max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-10 px-8" >
                    <div className=" text-center md:text-left">
                        <span className="px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg mb-2 uppercase">Engineering Excellence</span>

                        <h1 className="text-3xl font-bold mb-4 text-black text-center md:text-left md:text-5xl">
                            Build the Future<br /> with Codeofy
                        </h1>

                        <p className="text-gray-600 mb-6">
                            We deliver high-end software solutions tailored to your business
                            needs using cutting-edge technologies and agile methodologies.
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                             Start Your Project
                            </button>

                            <button className="border px-6 py-3 rounded-lg text-black bg-white">
                                View Our Work
                            </button>
                        </div>
                    </div>

                    <div className="relative bg-blue-100 rounded-2xl flex items-center justify-center h-72">


                        <div className="absolute bottom-0  -translate-x-1/2  left-29 flex items-center gap-2 sm:gap-3 bg-white rounded-2xl h-12 sm:h-14 w-4/5 sm:w-2/4 p-2 sm:px-6
translate-y-1/2 shadow-md">

                            < MdOutlineVerified size={25}  className="bg-blue-700 text-blue-300 p-1 rounded-full sm:size-30px" />

                            <p className="text-black leading-tight text-[10px] sm:text-xs">
                                <span className="font-bold">99%</span> <br />
                                Client Satisfaction
                            </p>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default Home