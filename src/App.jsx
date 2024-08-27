import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enable, setEnable] = useState(false)

  useEffect(() =>{
    
  })

  return (
    <>
    <h1>Projects 3</h1>
    <button onClick={() => setEnable(!enable)}>
      {enable ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </>
  )
}

export default App
