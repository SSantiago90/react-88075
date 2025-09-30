import { useContext } from "react"
import cartContext from "../../context/cartContext"

export default function CartWidget(){
  const { countItems } = useContext(cartContext)  
  /* 
    {
      addToCart: f(),
      removeItem: f(),
      countItems: f()  
    }
  */

  return (
    <div>
      <span>🛒 {countItems()} </span>
    </div>
  )
}