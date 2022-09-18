import React from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import DataLista from "../../productosLista.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const ItemDetailContainer = () => {

const {id} = useParams(); //traigo id desde url con hook useParams

const { productosLista } = DataLista  //buscar los productos

const [Item, setItem] = useState([null]) //estado

useEffect(()=>{
  const prom = new Promise((res, rej) => {
//Simulamos retraso de red como pasaria con firebase
    setTimeout(()=>{
      const producto = productosLista.find( ele => ele.id === id )

        res(producto)
    }, 2000)

})

prom
  .then((resultado) => setItem(resultado))
  .catch((err) => console.log(err))
  .finally(() => console.log("promesa realizada"));
},[id]);

 
  return (

    
    <div>  
      <ItemDetail Item = { Item } />
    </div>
  )
  
}


export default ItemDetailContainer
