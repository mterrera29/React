
import React from 'react'
import ItemListContainer from "./components/ItemListContainer"
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
       <NavBar/>
       <ItemListContainer greeting="Bienvenidos a nuestra Tienda Virtual!"/>
    </div>
  )
}

export default App
