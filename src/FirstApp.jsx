  //Challenge #3
  import PropTypes from 'prop-types'
  import { useState } from 'react'

  const FirstApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
      setCounter ( counter + 1 )
      console.log ( 'calling handleAdd' )
    }
    const handleSubsstract = () => {
      setCounter ( counter - 1 )
      console.log ( 'calling handleAdd' )
    }
    const handleReset = () => {
      setCounter (0)
      console.log ( 'calling handleAdd' )
    }

    return (
      <>
        <h1>Operaciones</h1>
        <h4>Puedes sumar, restar y reiniciar el contador</h4>
        {/* <span>{value}</span> */}
        <p>El resultado es: {counter}</p>
        <button onClick = { () => handleSubsstract() } >-1</button>
        <button onClick = { () => handleReset() } >Reset</button>
        <button onClick = { () => handleAdd() } >+1</button>
        {/* <p>Value es: {value}</p> */}
      </>
    )
  }

  export default FirstApp

  //hook e suna función básica especiales de react como useState
  //eventos empiezan por ON