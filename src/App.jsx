//importando componentes
import { Button } from "./componets/Button"
import { Card } from "./componets/Card";
//importando iconos
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
//importando hooks
import { useState,useEffect } from "react";
//importando estilos
import './sass/App.scss'
function App() {

  const [pokemonId, setPokemonId]= useState(1);
  useEffect(()=>{
    console.log(pokemonId)
  })
  function prevClick(){
    (pokemonId===1)?
      setPokemonId(1):
      setPokemonId(pokemonId-1)
  }
  function nextClick(){
    setPokemonId(pokemonId+1)
  }
  
  return (
    <>
    <div className="card-container">
      <Card/>
    </div>
    
    <div className="buttons-container">
      
      <Button
        icon={<TiArrowLeftOutline/>} 
        handleClick={prevClick}
      />
      {pokemonId}
      <Button
        icon={<TiArrowRightOutline/>}
        handleClick={nextClick}
      />
      
    </div>    
    </>
    
  )
}

export default App
