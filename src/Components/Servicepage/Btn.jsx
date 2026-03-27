import React from "react";
import Software from "./Software";
function Btn(){
    return(
        <>
          <div className="flex flex-wrap justify-left items-center gap-4 p-6 bg-gray-50">
      
      <button className="px-5 py-2 text-gray-700  font-semibold   hover:bg-blue-600  ">
        Custom Enterprise
      </button>

      <button className="px-5 py-2  text-gray-700  font-semibold hover:bg-blue-600 ">
       SaaS Development
      </button>

      <button className="px-5 py-2  text-gray-700  font-semibold  hover:bg-blue-600 ">
       Quality Assurance
      </button>

      <button className="px-5 py-2 text-gray-700  hover:bg-blue-600 font-semibold ">
        Quality Assurance
      </button>
      {/* <hr className="absolute top-6 left-0 md:w-full h-0.5 mt-12 bg-gray-700 " /> */}

      <Software/>
    </div>
    
        </>
    )
}
export default Btn;
