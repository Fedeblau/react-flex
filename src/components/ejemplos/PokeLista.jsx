import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"


const PokeLista = () => {
    const [pokelista, setPokelista] = useState([])
    console.log(pokelista)

    const url = `https://pokeapi.co/api/v2/pokemon`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPokelista(data.results))
            .catch(err => console.log(err))
    }, [])


  return (
    <div>
        {pokelista.map((poke) => <PokemonCard key={poke.name} url={poke.url}/>)}
    </div>
  )
}

export default PokeLista