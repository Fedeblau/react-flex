//  GET url parametro
// URL params
// https://pokeapi.co/api/v2/pokemon/{id o name}/

import { useEffect, useState } from "react"


//  QUERY PARAMS
// https://www.gogle.com/search 
//  q (required) = string
//  ?pais = string 
//  https://www.gogle.com/search?q=messi&pais=argentina 



const PokeApi = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    console.log('id', id)

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPokemon(data))
            .catch(err => console.log(err))
    }, [id])

    const handleSiguiente = () => {
        setId(id+1)
    }
    const handleAnterior = () => {
       id > 1 && setId(id-1)
    }



    return (
        <div>
            { pokemon  &&
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <button onClick={()=>handleAnterior()}>Anterior</button>
                    <button onClick={()=>handleSiguiente()}>Siguiente</button>
                </>
            }
        </div>
    )
}

export default PokeApi