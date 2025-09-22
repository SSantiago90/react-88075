import products from './products'

function getMockAPIData(){
    const promiseProducts = new Promise( (resolve) => {
      setTimeout( () => {
        console.log("devolviendo datos...")
        resolve(products)
        //reject("Servicio/Base de Datos caída")
      }, 2000 )
  })

  return promiseProducts;
}



export default getMockAPIData;