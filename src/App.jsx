
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer"
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
         <NavBar/>

         <Routes>
            <Route exact path="/" element={<ItemListContainer/>} />
            <Route exact path="/category/:cat" element={<ItemListContainer/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
         </Routes>
         
    </BrowserRouter>
  )
}

export default App
