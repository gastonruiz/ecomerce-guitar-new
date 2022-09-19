import React, { useState, useEffect } from "react";
import ItemList from "../ItemListContainer/ItemList/ItemList";
import dataLista from '../../productosLista.json'
import { useParams } from "react-router-dom";



const Category = (props) => {
  const [ guitarsArray, setGuitarsArray] = useState([])  // create state to assign results
  
  const { productosLista } = dataLista   // data array

  const { categoryid } = useParams()   // get category id from url

  // console.log('categoryid', categoryid)

  
  useEffect(() => {       // when component is mounted it will start the logic
    
    if(!dataLista){      // conditional to avoid problems when dataLista is empty/fetching
      dataLista = []
    } else {
      const result =  productosLista.filter( x => x.category == categoryid)  // filter dataLista by current categoryId from url
      setGuitarsArray(result)                                               // 1 = electric guitars
      // console.log('RESULT', guitarsArray)                                   // 2 = acoustic guitars
    }
    
  }, [categoryid]);

    return (
      <>
        <div className="font-bold p-4 m-0 text-center text-4xl text-white bg-pink-700">
          {" "}
          {props.msg}{" "}
        </div>

        <div>
          <ItemList productosLista={guitarsArray}  />
        </div>
      </>
    );
};

export default Category;
