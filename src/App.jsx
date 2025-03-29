import { useState, useEffect } from 'react'
import perfil_foto from './assets/img/perfil_foto2.jpg'
import './App.css'

function TransitionText() {
  const [currentText, setCurrentText] = useState('Hello World');
  const [displayText, setDisplayText] = useState('Hello World');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentText(prev => prev === 'Hello World' ? 'Olá Mundo' : 'Hello World');
      setCurrentIndex(0);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      if (currentIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => {
            const newText = currentText.slice(0, currentIndex + 1);
            return newText;
          });
          setCurrentIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsTransitioning(false);
      }
    }
  }, [currentIndex, currentText, isTransitioning]);

  return <h1>{displayText}</h1>;
}

function App() {
  return (
    <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TransitionText />
          <div className='separator'></div>
          <img id="perfil_foto" src={perfil_foto} alt="Profile Photo" />
        </div>
    </>
  )
}

export default App