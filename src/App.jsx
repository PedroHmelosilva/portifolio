import { useState } from 'react'
import perfil_foto from './assets/img/perfil_foto2.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Hello World</h1>
          <div class='separator'></div>
          <img id="perfil_foto" src={perfil_foto} alt="Profile Photo" />
        </div>
    </>
  )
}

export default App