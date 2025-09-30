import { useContext } from "react";
import cartContext from "../../context/cartContext";

function CartContainer(){
  const { cartItems, removeItem } = useContext(cartContext)

  return (
    <div>
      <h3>Tu carrito</h3>
      <div>
        {
          cartItems.map( item => <div>
            <img width="100" src={item.imgURL}></img>
            <h4>{item.title}</h4>
            <p>Unidades: {item.count}</p>
            <p>$ {item.price * item.count}</p>
            <button onClick={ () => removeItem(item.id)}>Quitar del carrito</button>
          </div>
            )
        }
      </div>
      <button>Ir a pagar</button>
    </div>
  )
}

export default CartContainer;