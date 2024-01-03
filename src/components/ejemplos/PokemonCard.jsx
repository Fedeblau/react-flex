import React, { useEffect, useState } from 'react'

const PokemonCard = ({url}) => {
    const [pokeData, setPokeData] = useState(null)
    console.log(pokeData)

    const getPokemonById = async ( id ) => {
        try{
          const response = await  fetch(url)
          const data =  await response.json()
          setPokeData(data);
        }catch(error){
          console.log(error);
        }
      
      }
    useEffect(() => {
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setPokeData(data))
        getPokemonById()
    }, [])

  return (
    <>
    {
        pokeData &&
        <div>{pokeData.name}</div>
    }
    </>
  )
}

export default PokemonCard