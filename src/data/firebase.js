// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, query, where, getDocs, getDoc, addDoc, getFirestore} from "firebase/firestore";
import products from './products';

const firebaseConfig = {
  apiKey: "AIzaSyDDBQUVp11UtdAApwfvm7ibRk8qe-uHHCs",
  authDomain: "react-lunes.firebaseapp.com",
  projectId: "react-lunes",
  storageBucket: "react-lunes.firebasestorage.app",
  messagingSenderId: "826651368645",
  appId: "1:826651368645:web:81047e800174c61e8124ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getProducts(){
   const productsRef = collection(db, "products");

   const productsSnapshot = await getDocs(productsRef);
   // * getDocs(productsRef).then( productsSnapshot => ...)

   //const document0 = productsSnapshot.docs[0];
   //console.log( document0.data(), document0.id ) 
   // resp.json()

   const documents = productsSnapshot.docs;

   const dataDocs = documents.map( item => {
    return { id: item.id, ...item.data() }
   })

   return dataDocs
}

export async function getProductById(idParam){
  const docRef = doc(db, "products", idParam);
  const docSnapshot = await getDoc(docRef)
  const docData = docSnapshot.data();
  docData.id = docSnapshot.id

  return docData;
}

export async function getProductsByCateg(categParam){
   const productsRef = collection(db, "products");

   const queryCategory = query(productsRef, where("category", "==", categParam));
   const productsSnapshot = await getDocs(queryCategory);
  

   const documents = productsSnapshot.docs;
   const dataDocs = documents.map( item => {
    return { id: item.id, ...item.data() }
   })

   return dataDocs
} 

//  2. Crear una "orden" de compras en firebase
export async function createOrder( orderData){
   const productsRef = collection(db, "orders");
   const newDoc = await addDoc(productsRef, orderData)   
   return newDoc;
}


// 1. "export" mis productos a firebase
export async function exportProductsData(){
   const productsRef = collection(db, "products")  
   for( let item of products ){
      delete item.id;
      const docCreated = await addDoc(productsRef,item)
      console.log("Creado el doc", docCreated.id)
   }
}

export default app;