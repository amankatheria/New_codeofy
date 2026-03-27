import React from "react";
import { FaLock } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GrTest } from "react-icons/gr"
import { IoPeopleSharp } from "react-icons/io5";

function Policy() {
    return (
        <>

            <div className="w-full flex justify-center items-center py-4 px-4 bg-gray-50">

                <div className="max-w-4xl   w-full bg-gradient-to-r from-blue-900 to-blue-900 rounded-4xl text-center p-12 shadow-xl">

                    <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
                        Zero-Bug Policy Quality Assurance
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Our dedicated QA engineers employ automated and manual testing methodologies to ensure your software
                        is robust, secure, and user-friendly.
                    </p>

                        <div className="flex justify-center flex-wrap gap-10 text-blue-600">

                            <div className="flex flex-col items-center">
                                <GrTest className="text-3xl" />
                                <p className="text-sm mt-2 text-white">Unit Testing</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <IoPeopleSharp className="text-3xl" />
                                <p className="text-sm mt-2 text-white">UAT Testing</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <IoSpeedometerOutline className="text-3xl" />
                                <p className="text-sm mt-2 text-white">Performance</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <FaLock  className="text-3xl" />
                                <p className="text-sm mt-2 text-white">Security Audits</p>
                                 

                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
export default Policy