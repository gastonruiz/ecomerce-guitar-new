import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item/Item";
import carga from "./../../imagenes/rockout-guitar.gif";

const ItemList = (props) => {
  const { productosLista } = props;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const prom = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosLista);
        console.log(productosLista);
      }, 2000);
    });
    prom
      .then((resultado) => setProductos(resultado))
      .catch((err) => console.log(err))
      .finally(() => console.log("promesa realizada"));

    return () => {};
  });

  return (
    <>
      {productos.length < 1 ? (
        <div className="grid justify-items-center">
          <img className="" src={carga} alt="loading"></img>
          <p className=" bg-black text-white ">Loading Products...</p>
        </div>
      ) : (
        productos.map((item, index) => (
          <Item
            id={item.id}
            key={index}
            title={item.title}
            price={item.price}
            stock={item.stock}
            img={item.img}
          />
        ))
      )}
    </>
  );
};

export default ItemList;
