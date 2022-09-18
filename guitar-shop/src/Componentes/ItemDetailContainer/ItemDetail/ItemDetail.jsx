import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Context } from "react";



const ItemDetail = ({ Item , stock, title, price, id}) => {
  
 let { addItem } = Context = useContext( CartContext );
  
  
  const onAdd = (cuenta) => {
    
    
    alert(`Agregaste ${cuenta} articulos al carrito`);

    addItem(Item, cuenta)
  
  };

  

  return (
    <div>
      <div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          {Item.title} - {Item.id}
        </div>

        <div>
          <div>
            <img className="w-full" src={Item.img} alt="The Guitar" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {Item.title}
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Item.descripcion}
            </p>
            
          </div>
          
        </div>
        
      </div>

    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title} <span>$ {price}</span></div>
    <p className="text-gray-700 text-base">
    
    Stock disponible {stock}
    </p>
    
    <div className="bg-gray-700 rounded">
    
    <ItemCount initial={1} stock={8} onAdd={onAdd} /> 
    <div className="text-center text-2xl  text-neutral-500">
<Link to = "/cart"><button >Finalizar compra</button> </Link>
</div>
    </div>



    </div>
      
    </div>
  
    
  );
};

export default ItemDetail;
