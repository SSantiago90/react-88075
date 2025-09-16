import Item from './Item';
import getMockAPIData from '../data/mockAPI';
import { useState, useEffect } from 'react';

export default function ItemListContainer( props ){
  // 1. useState -> para guardar el listado de items
  const [products, setProducts] = useState([]);

  // 2. useEffect -> para controlar la petición de Datos a la API (mockAPI)
  useEffect( () => {
    // 3. fetch o solicitud simulada / montaje
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
    // * Promise.then() -> cuando la promesa se cumpla
    // * Promise.catch() -> cuando la promesa rechaza (error)
    // ? Async/Await -> Promesas -> SugarSyntax
  }, [])


  return (
    <div >
        <h2>{props.greeting}</h2>
        {/* renderizado condicional */}
        { products.length === 0 ? "Cargando..." : ""}
        <div>
        <h4>Nuestros productos</h4>   
        <div style={ { display: "flex", gap: "12px", flexDirection: "row", flexWrap: "wrap"} }>
        {
          products.map(item =>  <Item {...item} /> )
        }     
        </div>
      </div>
    </div>
  )
}

