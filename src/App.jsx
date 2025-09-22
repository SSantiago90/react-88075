import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';

export default function App() {

  return (<>  
   <NavBar />
   <ItemListContainer greeting="Tienda de Remeras 👕"/>  
    </>)     
}

