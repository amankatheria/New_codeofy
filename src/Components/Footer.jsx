import React from "react";
import { Mail, Phone, MapPin,Instagram ,Facebook,Twitter } from "lucide-react";
function Footer() {
    return (
        <>
            <footer className="bg-gray-100 text-gray-700 pt-12 pb-3 px-3">

                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-xl font-bold mb-4">Codeofy</h2>
                        <p className="text-sm mb-4">
                            Empowering enterprises with cutting-edge digital solutions and AI-driven experiences.
                        </p>


                        <div className="flex gap-4 text-lg">
                            <span className="cursor-pointer"><Instagram size={20}/></span>
                            <span className="cursor-pointer"><Facebook size={20} /></span>
                            <span className="cursor-pointer"><Twitter size={20} /></span>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-semibold mb-4 text-black">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Web Development</li>
                            <li>Mobile Engineering</li>
                            <li>AI & ML Solutions</li>
                            <li>Cloud Strategy</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-semibold mb-4 text-black ">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li> Home</li>
                            <li> Community</li>
                            <li> Blog </li>
                            <li >Contact</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-semibold mb-4 text-black">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail size={16} /> hello@codeofy.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} />#####
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={16} />jaipur
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="border-t mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm">
                    <p> 2026 Codeofy. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <span className="cursor-pointer">Privacy Policy</span>
                        <span className="cursor-pointer">Terms of Service</span>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer;
