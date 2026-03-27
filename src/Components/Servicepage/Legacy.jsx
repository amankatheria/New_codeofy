import React from "react";
import { CheckCircle } from "lucide-react"
function Legacy() {
    return (
        <>
            <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
              

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4  text-center md:text-left ">
                            Legacy Modernization
                        </h1>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Don't let technical debt hold you back. We refactor and upgrade
                            your existing systems to modern stacks without interrupting your
                            business operations.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-blue-600 w-5 h-5" />
                                <p className="text-gray-700">Code Audit & Analysis</p>
                                   </div>
                                <p>Identifying bottlenecks and security risks.</p>
                         

                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-blue-600 w-5 h-5" />
                                <p className="text-gray-700">
                                    Microservices Migration
                                </p>
                                   </div>
                                <p>Breaking monoliths into scalable services.</p>
                         

                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-blue-600 w-5 h-5" />
                                <p className="text-gray-700">
                                    UI/UX Revamp
                                </p>
                                </div>
                                <p>
                                    Modernizing the look and feel for today's users.
                                </p>
                            
                        </div>
                    </div>
            </section>
        </>
    )
}
export default Legacy;