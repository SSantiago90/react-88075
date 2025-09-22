import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// 1. Importar BrowserRouter

export default function App() {
  return (
    <>
    <BrowserRouter>
      <main className="container">
      <NavBar />    

    {/* Este contenido es navegable/variable */}
      <Routes>
        <Route 
          path="/" 
          element={ <ItemListContainer greeting="Tienda de Remeras geek"/>} 
          />

        <Route
         path="category/:categParam"
         element={ <ItemListContainer greeting="Categoria"></ItemListContainer>}
        />

        <Route path="/detail/:idParam" element={ <ItemDetailContainer/>} />
        
        <Route path="*" element={ <p>Oops! No encontramos esto</p>}></Route>
      </Routes>
        
      </main>

    </BrowserRouter>
    </>
  )
}
