import Item from '../Item/Item';
import getMockAPIData, { getProductByCategory } from '../../data/mockAPI';
import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router';


// 1. Estado para almacenar los products 👌
// 2. Effecto para hacer "fetch" de datos 👌
// 3. Leer la URL para obtener la categoria activa 👌
// 4. Necesitamos que la "API" devuelva una categoria 👌
export default function ItemListContainer( props ){
  const [products, setProducts] = useState([]);
  const { categParam } = useParams();
  
 
  useEffect( () => {   
    if( categParam ) {
      {      
        getProductByCategory(categParam) // filter
        .then( (productList) => {
            console.log("Promesa terminada")
            setProducts(productList);
      })
    }
    }
    else{      
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
    }
  }, [categParam]) 

 
  return (
    <div>
      <h2>{props.greeting}</h2>
      <div>
        {
         products.length === 0 ? 
          <p className="item-list-container__loading">Cargando...</p>
         : 
           <></>
        }

          <div>
            <h4>Nuestros productos</h4>   
          <div className="item-list">
            { products.map(item =>  <Item {...item} key={item.id}  /> )}
          </div>
          </div>
     
      </div>
    </div>
  )
}

