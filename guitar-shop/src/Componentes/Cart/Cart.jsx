import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export default function Cart() {
  const { Items } = useContext(CartContext);

  return (
    <>
      <div>Cart</div>
      {!Items && <span> No hay Items </span>}
      {Items.length && 
        <ol>
          {Items.map(((Item, indx) => 
            <li key={indx}>
              {Item.title} - {Item.quantity}
            </li>
          ))}
        </ol>}
    </>
  );
}
