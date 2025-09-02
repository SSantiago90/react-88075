import { useState } from "react"

export default function StateComponent(){
  const [ color, setColor ] = useState("#000000");

  // setColor("#000000")
  // Arrow Function () => {}
 
  return (
    <div>
      <p>Selecciona tu color - Color activo: 
        <span style={ { display: "inline-block", width:"12px", height: "12px", backgroundColor: color }}></span>
      </p>
      
      <button onClick={ () => setColor("#000000") }>Negro</button>
      <button onClick={ () => setColor("#6370ffff") }>Azul</button>
      <button onClick={ () => setColor("#e64545ff") }>Rojo</button>
    </div>
  )
}
