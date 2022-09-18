import React from "react";

import { Link } from 'react-router-dom'
import Detalle from "./../../../imagenes/btnMoreInfo.jpg"

const Item = ({ id, title, price, stock, img}) => {
  const onAdd = (cuenta) => {
    
    alert(`Agregaste ${cuenta} articulos al carrito`);

    
  
  };


  return (
    <div className="inline-grid max-w-sm rounded overflow-hidden m-7 shadow-lg">
  <Link to= {`/item/${id}`}>
  <img className="w-full" src={img} alt="The Guitar"width={600} height={800}/>
  </Link>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title} <span>$ {price}</span></div>
    <p className="text-gray-700 text-base">
    
    Stock disponible {stock}
    </p>
    <div className="bg-gray-700 rounded">
      
      <Link to={`/item/${id}`}>
        <button className="ml-14" to={`/item/${title, price, stock, img}`}> 
      <img src={Detalle} alt="More Detail" /> </button>
      </Link>  
      </div>
     
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Guitars</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rockstar</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SixStrings</span>
  </div>
</div>

  );
};

export default Item;
