
import { useState } from "react"
import Button from "./Button/Button"
import Card from "./Card/Card"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import NavBar from "./NavBar/NavBar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./home/Home"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"




function App() {


  return (


    <>
    <BrowserRouter>

        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer greeting='hola'/>}/>
          <Route path="/category/:category" element={<ItemListContainer greeting='hola'/>}/>
          <Route path="producto/:id" element={<ItemDetailContainer/>}/>
        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
