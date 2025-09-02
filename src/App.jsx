import './App.css'
import Item from './components/Item'

export default function App() {
  const title = "Hola Coderhouse!⚛️";

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
      <h1> { title } </h1>
      <h2>Primer clase de React</h2>
      <div style={greetingStyle}
        className="card">       
        <p>
          Bienvenido { getUsername() } a tu dashboard!
        </p>
      </div>
      <div>
        <h2>Item List</h2>        
        <Item title="Remera Negra Javascript" price="300" img="https://http2.mlstatic.com/D_NQ_NP_723140-MLA50600181693_072022-O.webp"/>
        <Item title="Gorra Node JS" price="50" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ko7Do0hOBexVSmMll1oMxwUGwwrzsh2tGg&s" />
        <Item title="Remera React JS" price="280" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LlTBosp6CjUlxAR2x32X-j5frTadl_jLxA&s"/>

      </div>
      <p className="read-the-docs">
        Coderhouse!
      </p>    
    </>)     
}

