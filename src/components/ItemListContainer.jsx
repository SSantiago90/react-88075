import products from '../data/products'
import Item from './Item';
import getMockAPIData from '../data/mockAPI';

export default function ItemListContainer( props ){
  console.log(
    getMockAPIData()
    .then( ( productList) => {
        console.log("Promesa terminada")
        console.log(productList);
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
  );

  return (
    <div >
        <h2>{props.greeting}</h2>
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

