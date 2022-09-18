import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from './Componentes/NavBar/NavBar'
import { Route , Routes} from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer' 
import { CartProvider } from './Context/CartContext'
import Cart from './Componentes/Cart/Cart'

const App = () => {
  return (
    <div>

      <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer msg="All Products" />}/>
      <Route path="/category/:categoryid" element={<ItemListContainer/>}/>  
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>  
      <Route path="/cart" element={<Cart/>}/>
      <Route/>
      </Routes>
      
      </BrowserRouter>
      </CartProvider>


    </div>
  )
}

export default App