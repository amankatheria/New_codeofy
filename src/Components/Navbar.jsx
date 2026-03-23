import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-br from-blue-50 to-white text-black px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
          Codeofy
        </h1>

        <ul className="hidden md:flex items-center gap-8">

          <li>
            <Link to="/"
              className="hover:text-blue-700 cursor-pointer font-semibold">
              Home
            </Link>
          </li>


          <li>
            <Link to="/Body"
              className="hover:text-blue-700 cursor-pointer font-semibold">
              Body
            </Link>
          </li>


          <li >
            <Link to="/Blog"
              className="hover:text-blue-700 cursor-pointer font-semibold">
              Blog
            </Link>
          </li>

          <li >
            <Link to="/Study"
              className="hover:text-blue-700 cursor-pointer font-semibold">
              Case study
            </Link>
          </li>

          <li>
            <Link to="/Community"
              className="hover:text-blue-700 cursor-pointer font-semibold">
              Community
            </Link>
          </li>

          <li >
            <Link to="/Contact"
              className="hover:text-blue-700 cursor-pointer font-semibold">
              Contact
            </Link>
          </li>

        </ul>

        <div className="hidden md:flex space-x-4">

          <button 
            
             onClick={() => navigate("/Signin")}
            className="border border-black px-5 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            Log In
           
          </button>

          <button
            onClick={() => navigate("/Login")}
            className="border border-black px-5 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
          >
            Sign Up
          </button>

        </div>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>

      </div>

      {open && (
        <div className="md:hidden mt-4 space-y-4 px-4">

          <div > <Link to="/" className="cursor-pointer">Career </Link></div>
          <div ><Link to="/Blog" className="cursor-pointer">Blog</Link></div>
          <div > <Link to="/Study" className="cursor-pointer">   Case study</Link></div>
          <div > <Link to="/Community" className="cursor-pointer">Community </Link></div>
          <div ><Link to="/Contact" className="cursor-pointer">Contact </Link></div>

          <button
            onClick={() => navigate("/Login")}
            className="w-full border border-black py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Log In
          </button>

          {/* <button
            onClick={() => navigate("/signup")}
            className="w-full border border-black py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Sign Up
          </button> */}

        </div>
      )}

    </nav>
  );
}

export default Navbar;