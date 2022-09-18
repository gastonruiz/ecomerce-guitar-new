import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import NavBar from './Componentes/NavBar/NavBar'
import { Route , Routes} from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer' 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer msg="All Products" />}/>
      <Route path="/category/:categoryid" element={<ItemListContainer/>}/>  
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>  
      <Route path="/cart" element={<ItemDetailContainer/>}/>
      <Route/>
      </Routes>
      
      </BrowserRouter>


    </div>
  )
}

export default App