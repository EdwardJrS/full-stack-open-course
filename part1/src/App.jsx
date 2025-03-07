
{/* Los nombres de los componentes siempre deben ir con la Capital Letter */}
const Hello = (props) => {
  console.log(props);
  return (
    <div>
      {/* Los props los defino en el componente y los enviaré desde app */}
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Edward';
  const age = 29;
  {/* Recuerda que no se pueden renderizar objetos 
      pero si podemos renderizar arreglos, si el arreglo contiene valores primitivos, NO OBJETOSSSS
    */}
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;