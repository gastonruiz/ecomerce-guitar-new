import React from "react";
import cart from "../../imagenes/carritoCompras.jpg"
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <div>
      <Link to={`/cart`} >
        <img src={cart} alt="cart" width={100} className="rounded-2xl"></img>
      
      </Link>
      
    </div>
  );
};

export default CartWidget;
