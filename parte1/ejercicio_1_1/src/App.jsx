const Content = (props) => {
  console.log(props);
  return (
    <div>
      {/* Los props los defino en el componente y los enviaré desde app */}
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App