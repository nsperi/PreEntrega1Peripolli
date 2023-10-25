import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ItemsListConteiner from './components/ItemsListContainer/ItemsListConteiner'

function App() {
  
  const greeting = 'Bienvenido!! En este sitio tendrás la posibilidad de ver algunas mascotas que necesitan tu ayuda para poder seguir con su tratamiento. Te invitamos a conocerlos.'
  return (
    <>
      <NavBar links/>
      <ItemsListConteiner greeting={greeting}/>
    </>
  )
}

export default App
