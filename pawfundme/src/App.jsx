import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemsListConteiner from './components/ItemsListContainer/ItemsListConteiner'
import Counter from './components/Counter/Counter'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import {CartProvider} from './context/CartContext'
import CheckOut from './components/CheckOut/CheckOut'



function App() {

  return (
    <>
      


      <BrowserRouter>

        <CartProvider>
            <NavBar links/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/item' element={<ItemsListConteiner/>}/>
              <Route path='/:categoryId' element={<ItemsListConteiner/>}/>
              <Route path='/item/:idMascota' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<Error/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/CheckOut' element={<CheckOut/>}></Route>
            </Routes>
        </CartProvider>
        
      </BrowserRouter>
      

    </>
  )
}

export default App