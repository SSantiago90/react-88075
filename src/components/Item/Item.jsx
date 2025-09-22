import StateComponent from '../StateComponent/StateComponent';
import './Item.css'
import { Link } from 'react-router';

function Item( {id, title, img, price} ){
  
  return ( 
    <div className="item-card">
      <h2 className="item-card-title"> {title} </h2>
      <img 
        className="item-card-img"
        height="300"
        src={img}
        alt={title}
      /> 
      <h3 className="item-card-price">Precio: $ {price}</h3>
      <StateComponent/>
      <div style={{ textAlign: "center"}}>
        {/* <a href=""> -> <Link to="" */}
        <Link to={ `/detail/${id}`}>
          <button>Ir a ve detalle</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Item;