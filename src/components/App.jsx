
import { useState } from "react"
import Button from "./Button/Button"
import Card from "./Card/Card"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import NavBar from "./NavBar/NavBar"
import PokeApi from "./ejemplos/PokeApi"
import PokeLista from "./ejemplos/PokeLista"
import RenderProps from "./ejemplos/RenderProps"




function App() {

  const [categoria, setCategoria] = useState(null) 

  const changeCategory=(param)=>{
    setCategoria(param)
}

  return (
    <>
        <NavBar />
      {/* <PokeLista /> */}
      {/* <ItemListContainer greeting='hola comision 57905'/> */}
      {/* <Card /> */}
      {/* <PokeApi /> */}
      <RenderProps categoria={categoria} changeCategory={changeCategory}/>
    </>
  )
}

export default App
