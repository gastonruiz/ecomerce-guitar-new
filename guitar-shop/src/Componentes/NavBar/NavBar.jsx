import React from "react";
import logo from "../imagenes/logoPagina.webp"
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  
  return (
    <div className="inline-grid grid-cols-4 bg-black m-0">
      <div>
        <Link to={'/'}>
        <img src={logo} alt="logo" width={250} height={250} />
        </Link>
      </div>
      <div>
        <h1 className="text-white mt-8 pt-14 text-6xl font-bold font-kaushan">
          Guitar Shop
        </h1>
      </div>
      <div>
      <ul className="flex items-stretch font-mono font-semibold text-[rgb(255,0,255)] flex space-x-4 text-xl pt-24">
            <Link to={'/'}>
                <span className="ml-4 hover:text-pink-600">
                    Home
                </span>
            </Link>
            <Link to={'/category/1'}>
                <span className="ml-4 hover:text-pink-600" >
                Electric
              
                </span>
            </Link>
            <Link to={'/category/2'}>
                <span className="ml-4 hover:text-pink-600" >
                Acoustic
                </span>
            </Link>
            
            <Link to="/">
                <span className="ml-4 hover:text-pink-600">
                    Contact
                </span>
            </Link>

        </ul>
      </div>
      <div className="pt-16 ml-24 pl-24 ">
        <CartWidget />
      </div>
    </div>
  );
}
