import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemsListConteiner from './components/ItemsListContainer/ItemsListConteiner'
import Counter from './components/Counter/Counter'
import Card from './components/Card/Card'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import Home from './components/Home/Home'


function App() {


  return (
    <>
      
      <BrowserRouter>

        <NavBar links/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/item' element={<ItemsListConteiner/>}/>
            <Route path='/item/:idMascota' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<Error/>}/>
          
          </Routes>
      </BrowserRouter>


    </>
  )
}

export default App