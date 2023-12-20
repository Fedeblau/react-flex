import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import "./card.css"

const Card = ({children}) => {

  // let contador = 1

  const [count, setCount]  = useState(1)
  const [saludo, setSaludo] = useState('hola mundo')
//const [fyh, setFyh] = useState(new Date())

  // console.log(contador)
  // console.log(count)

  useEffect(() => {
    // console.log('estado saludo actualizado')
    setTimeout(()=>{
      setCount(count +1)
    }, 10000)
    
  }, [count])

  const sumar = () => {
    setCount(count+1)
    // setFyh(new Date())
  }

  const restar = () => {
    setCount(count-1)
  }

  const resetear = () => {
    setCount(1)
  }


  const handleSaludo = () => {
    if(saludo === 'hola mundo'){
      setSaludo('chau mundo')
    }else{
      setSaludo('hola mundo')
    }
  }


  return (
    <div className='card'>
        <Button label={"saludar"} color={"purple"} callback={handleSaludo} /> 
        <h2>{saludo}</h2>
        <h2>Zapatilla Nike</h2>
        <p>Cantidad:</p>
        {/* <p>{fyh.toLocaleString()}</p> */}
        <p>{count}</p>
        <div className='flex '>
        <Button label={"restar"} color={'blue'} callback={restar} />
        <Button label={"sumar"} color={'red'} callback={sumar} />
        <Button label={"resetear"} color={"green"} callback={resetear} /> 
        </div>
        {children}
    </div>
  )
}

export default Card