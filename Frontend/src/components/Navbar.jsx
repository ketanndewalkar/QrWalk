import React, { useEffect } from "react";
import Logo from "../assests/Logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className="w-full h-35 bg-transparent px-12 absolute top-0 left-0 z-10"> 
      <div className="w-full h-full flex justify-between items-center">
        <img src={Logo} className="h-45" />
        <div className="h-full flex items-center jsutify-center mr-4 gap-12">
          <Link to="/" className="text-[1.3rem] font-semibold text-[#FF0000]">
            Home
          </Link>
          <Link to="/contact-page" className="text-[1.3rem] font-semibold text-[#FF0000]">
            Contact
          </Link>
          <div className=" h-[40%] border-1 borde-black"></div>
          <div className="w-20 h-10 rounded-full flex bg-[#E1E1E1] px-2 py-1 mr-3">
            <div className="w-1/2 h-full rounded-full bg-black"></div>
            <div className="w-1/2 h-full rounded-full flex items-center justify-center">
              <IoMenuOutline className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
