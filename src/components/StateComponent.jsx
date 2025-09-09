import { useState, useEffect } from "react"

export default function StateComponent(){
  const [ color, setColor ] = useState("#000000");
  console.log("Renderizando State Comp");
  
  useEffect( ()=>{
      /* Tareas complejas o delicadas */
      /* Tareas de montaje */
      console.warn("🟥Tarea compleja - conexión a Base de datos")
      console.warn("🗂️Acceso al DOM")
  }, [])
  // [] => Tareas a ejecutar solo en el montaje

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
