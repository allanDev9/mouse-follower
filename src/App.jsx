import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enable, setEnable] = useState(false)
  const [position,setPositio] = useState({x: 0, y:0})

  useEffect(() =>{
    console.log('efect', { enable })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY})
    }
    if (enable){
      window.addEventListener('pointermove', handleMove)
    }

  }, [enable])

  return (
    <main>
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: 'traslate(opx, 0px)'
    }}>

    </div>
    <button onClick={() => setEnable(!enable)}>
      {enable ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </main>
  )
}

export default App
