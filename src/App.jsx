import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/CartContainer/CartContainer';
import app, { getProducts } from './data/firebase';
//cartContext.Provider

export default function App() {
  console.log("Init Firebase", app)
  getProducts();
  

  return (
    <CartProvider>
      <BrowserRouter>  
          <NavBar />         
          <Routes>
            <Route path="/" element={<ItemListContainer>Bienvenidos a mi tienda</ItemListContainer>}/>
            <Route path="/category/:categParam" element={ <ItemListContainer />} />
            <Route path="/detalle/:idParam" element={ <ItemDetailContainer/>} /> 
            <Route path="/cart" element={ <CartContainer/> } />
            <Route path="*"  element={ <h1>404: Página no encontrada</h1>} /> 
          </Routes>
          
      </BrowserRouter>
    </CartProvider>
    )     
}

function MyButton(props){
  return (
    <button>
      {props.children}
    </button>
  )
}