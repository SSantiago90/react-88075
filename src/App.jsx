import './App.css'
import Item from './components/Item'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar';

export default function App() {
  const title = "Codigo clase 1 y 2⚛️";

  function getUsername(){
    return "Sebastian"
  }

  function getUserFavColor(){
    return "blue";
  }

  const greetingStyle =  
    {
      color: getUserFavColor(), 
      fontSize: "32px", 
    }

  return (<>  
   <NavBar />
   <ItemListContainer greeting="Tienda de Remeras geek"/>
   <hr/>
      <h3> { title } </h3>     
      <div style={greetingStyle}
        className="card">       
        <p>
          Bienvenido { getUsername() } a tu dashboard!
        </p>
      </div>     
      <p className="read-the-docs">
        Coderhouse!
      </p>    
    </>)     
}

