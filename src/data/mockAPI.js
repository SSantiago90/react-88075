import products from './products'

function getMockAPIData(){
    const promiseProducts = new Promise( (resolve,reject) => {
      setTimeout( () => {
        console.log("devolviendo datos...")
        resolve(products)
        //reject("Servicio/Base de Datos caída")
      }, 2000 )
  })
  return promiseProducts;
}

export function getProductById(idParam){
  const requestProduct = products.find( product =>  product.id === Number(idParam) )
  
    const promiseProduct = new Promise( (resolve) => {
      setTimeout( () => {
        console.log("devolviendo datos...")
        resolve(requestProduct)
      }, 2000 )
  })
  return promiseProduct;
}

export function getProductByCategory( categParam){
   const requestCategory = products.filter( product => product.category === categParam )    

    const promiseProduct = new Promise( (resolve) => {
      setTimeout( () => {
        console.log("devolviendo datos...")
        resolve(requestCategory)
      }, 2000 )
  })
  return promiseProduct;
}

export default getMockAPIData;