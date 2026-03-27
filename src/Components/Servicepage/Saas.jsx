import React from "react";
import { Cloud } from "lucide-react";
 function Saas(){
    return(
        <>
            <div className=" flex items-center justify-center bg-gray-50 px-2">
      
      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center relative m-10">
        
      
        <div className="absolute -top-10 left-20 bg-white shadow-lg rounded-xl p-4 w-64 z-5 md:left-70">
          <p className="text-sm text-gray-600">
            "Codeofy helped us launch our MVP in 3 months. Our MRR tripled by month six."
          </p>
          <p className="text-xs font-semibold mt-2">- TechStart Founder</p>
        </div>

    
        <div className="rounded-3xl h-[350px] flex items-center justify-center 
                        bg-gradient-to-br from-black to-orange-500 shadow-xl">
          <Cloud size={80} className="text-white opacity-80" />
        </div>

       
        <div>
          <h2 className="text-4xl font-bold mb-4">
            SaaS Development
          </h2>

          <p className="text-gray-600 mb-6">
            From ideation to launch, we build multi-tenant cloud applications that users love.
            Scale seamlessly as your customer base grows.
          </p>

          <div className="grid grid-cols-2 gap-6">
            
            
              <div>
                <h4 className="font-semibold">Subscription Engine</h4>
                <p className="text-sm text-gray-500">
                  Built-in Stripe & PayPal integrations.
                </p>
              </div>
           
            
              <div>
                <h4 className="font-semibold">Secure Multi-tenancy</h4>
                <p className="text-sm text-gray-500">
                  Isolated data architectures.
                </p>
              </div>
          </div>
        </div>

      </div>
    </div>
        </>
    )
 }
 export default Saas