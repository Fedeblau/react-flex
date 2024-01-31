
import { useState } from "react"
import Button from "./Button/Button"
import Card from "./Card/Card"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import NavBar from "./NavBar/NavBar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./home/Home"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import { MyContext } from "../context/MyContext"
import { CartContext, CartContextProvider } from "../context/CartContext"
import Cart from "../pages/Cart"
import Admin from "../pages/Admin"
import Checkout from "../pages/Checkout"




function App() {
  

  const profe = 'fede'
  const tutor = 'josué'


  return (


    <MyContext.Provider value={ { profe, tutor } }>
      <CartContextProvider>
        <BrowserRouter>

          <NavBar />
          <Routes>

            <Route path="/" element={<ItemListContainer greeting='hola' />} />
            <Route path="/category/:category" element={<ItemListContainer greeting='hola' />} />
            <Route path="producto/:id" element={<ItemDetailContainer />} />
            <Route path='/admin' element={<Admin/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

          </Routes>

        </BrowserRouter>
      </CartContextProvider>
    </MyContext.Provider>
  )
}

export default App
