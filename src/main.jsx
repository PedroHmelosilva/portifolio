import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Tools from './components/Tools.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Projects />
    <Contact />
    <Tools />
  </React.StrictMode>,
)