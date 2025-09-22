import { useState, useEffect } from "react"
import './StateComponent.css';

export default function StateComponent(){
  const [ color, setColor ] = useState("#000000");
  console.log("Renderizando State Comp");
  
  useEffect( ()=>{
      /* Tareas complejas o delicadas */
      /* Tareas de montaje */
      console.warn("Tarea compleja - conexión a Base de datos")
      console.warn("Acceso al DOM")
  }, [])
  // [] => Tareas a ejecutar solo en el montaje

  return (
    <div className="box-container">
      <p>Selecciona tu color: 
        <span className="color-preview" style={{ backgroundColor: color }}></span>
      </p>
      <div className="button-container">
        <button className="button" onClick={ () => setColor("#000000") }>Negro</button>
        <button className="button" onClick={ () => setColor("#6370ffff") }>Azul</button>
        <button className="button" onClick={ () => setColor("#e64545ff") }>Rojo</button>
      </div>
    </div>
  )
}

// StateComponent.css

