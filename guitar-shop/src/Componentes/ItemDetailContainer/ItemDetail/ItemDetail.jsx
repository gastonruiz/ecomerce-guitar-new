import React from "react";
import ItemCount from "../../ItemCount/ItemCount";





const ItemDetail = ({ Item , stock, title, price, id}) => {
  
  const onAdd = (cuenta) => {
    
    alert(`Agregaste ${cuenta} articulos al carrito`);

    
  
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
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </div>





    </div>



      <p className="text-gray-700 text-base">Stock disponible {stock}</p>
      
      <div className="bg-gray-700 rounded">
        <div>Añadido</div>
        
       
      </div>
      <button>Finalizar compra</button>
    </div>
  
    
  );
};

export default ItemDetail;
