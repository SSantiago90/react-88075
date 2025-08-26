import './App.css'

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
      <p className="read-the-docs">
        Coderhouse!
      </p>    
    </>)     
}

