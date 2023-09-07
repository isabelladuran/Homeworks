import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FirstApp from './FirstApp.jsx'
import './index.css'
import GiftExpertApp2 from './GiftExpertApp2.jsx'

// SI exporta por defecto, importa sin llaves.
// Es un componente, una ficha, siempre van a ser funciones. Retorna HTML. Como se llame el componente se llama la etiqueta.


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <FirstApp title="My First App" value={0}/> */}
    {/* <GiftExpertApp2 /> */}
  </React.StrictMode>,
)

// Prop: característica propias del componente que le manda un padre al hijo (características) y que las actualiza
// Estados, características propias del componente que puede actualizar

