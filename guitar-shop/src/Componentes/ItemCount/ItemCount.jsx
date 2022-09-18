import {React, useState}  from 'react'
import addCart from './../imagenes/addToCart.jpg'





const ItemCount = ({stock, initial = 0, onAdd}) => {
  
    const [cuenta, setCuenta] = useState(initial)

    const sumar = ()=>{
        cuenta < stock && setCuenta(cuenta + 1)
        cuenta >= stock && alert('Lamentamos no tener esa cantidad disponible')
    }
    const restar =()=>{
        cuenta > 0 && setCuenta(cuenta - 1)
    }
   
  
    return (
    
    <>
    <div className=''>
        <div className='text-center'>
    <div className='grid grid-cols-3 gap-6 py-7 px-14'>
        <button className='text-2xl text-gray-200'onClick={restar}>-</button>
        <p className='text-3xl text-gray-200'>{cuenta}</p>
        <button className='text-2xl text-gray-200' onClick={sumar}>+</button>
    </div>
        </div>
    </div>

    <div className='text-center'>
    <button className='p-2 ml-6 mr-6 mt-0 pt-1'
        onClick={() => onAdd(cuenta)} 
    >
        <img className='rounded-xl' src={addCart} alt='Add Cart' width={150}
        

        ></img>
        
    </button>
    </div>
    </>
  )
}

export default ItemCount