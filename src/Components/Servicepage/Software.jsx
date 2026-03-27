import React from "react";
import{CheckCircle} from"lucide-react"
import img2 from"../../assets/img 2.jpg"
function Software(){
    return(
     <>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4  text-center md:text-left ">
            Custom Enterprise Software
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Transform your complex business processes into scalable,
            automated workflows. Our enterprise solutions are designed
            to handle high-load performance and deep system integrations.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">ERP & CRM Development</p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">
                Business Intelligence Dashboards
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600 w-5 h-5" />
              <p className="text-gray-700">
                Cloud Infrastructure Migration
              </p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-center gap-6">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <img
              src={img2}
              className="w-64 h-auto object-contain"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-2xl shadow-md ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149648.png"
              className="w-64 h-auto object-contain"
            />
              {/* <h2 className=" text-xl font-semibold">Scalable Architecture</h2> */}
          </div>
        </div>
      </div>
   
     
     </>
    )
}
export default Software