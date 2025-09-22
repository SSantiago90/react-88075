import Item from '../Item/Item';
import getMockAPIData from '../../data/mockAPI';
import { useState, useEffect } from 'react';
import './ItemListContainer.css';

export default function ItemListContainer( props ){
  const [products, setProducts] = useState([]);

  useEffect( () => {
    getMockAPIData()
    .then( (productList) => {
        console.log("Promesa terminada")
        setProducts(productList);
     })
     .catch( (error) => {
        console.log("Error solicitando los datos", error);
        alert("Algo salió mal buscando los productos")
     } )
     .finally( () => { 
        console.log("Esto se ejecuta siempre")
     })    
  }, [])


  return (
    <div className="item-list-container" >
        <h2>{props.greeting}</h2>
        { products.length === 0 
          ? <p className="item-list-container__loading">Cargando...</p> 
          : ""
        }
        <div>
        <h4>Nuestros productos</h4>   
        <div  className="item-list">
        {
          products.map(item =>  <Item {...item} /> )
        }     
        </div>
      </div>
    </div>
  )
}

