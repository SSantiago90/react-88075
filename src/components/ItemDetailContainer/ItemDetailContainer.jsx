import { useEffect, useState } from "react";
import { getProductById } from "../../data/mockAPI";
import StateComponent from "../StateComponent/StateComponent"
import { useParams } from "react-router"
export default function ItemDetailContainer() {
  const { idParam } = useParams();
  
  const [ item, setItem] = useState(null)

  useEffect( () => {
      getProductById(idParam).then( res => setItem(res)); 
  }, [])

  
  return (
     <div className="item-card">      
     {
      item 
      ?  <div>
        <h2 className="item-card-title">{item.title}</h2>
          <img  
            className="item-card-img"
            height="600"
            src={item.img}
          /> 
          <h3 className="item-card-price">Precio: $ {item.price}</h3>
          <StateComponent/>
          <button>Comprar</button>          
        </div>
      :
      <p>Cargando...</p>
     
      }
      </div>
  )
}
