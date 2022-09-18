import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import Item from "../Componentes/ItemListContainer/ItemList/Item/Item";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [Items, setItems] = useState([]);

  function addItem(Item, quantity) {
    console.log({ ...Item, quantity });

    if (isInCart(Item.id)) {
          let aux = Item;
          let ItemIndex = aux.indexOf(( element ) => element.id === Item.id);
          aux[ItemIndex].quantity += quantity;
          setItems(...aux)

    } else {
      setItems([...Items, { ...Item, quantity}]);
    }
  }

  function removeItem(ItemId) {}

  function clear() {
    setItems([]);
  }

  function isInCart(ItemId) {
    if(!!Items){
    return Items.some((element) => element.id === ItemId);
  }else{
    return false
  }
  }

  return (
    <CartContext.Provider value={{ addItem, removeItem , Items}}>
      {children}
    </CartContext.Provider>
  );
}
