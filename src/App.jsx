import { useState, useEffect } from 'react'
import perfil_foto from './assets/img/perfil_foto2.jpg'
import './App.css'

function App() {
  return (
    <>
        <div id="container">
            <div id="letters">
                <h1><TransitionText /></h1>{/*Comando que chama a função de transição de texto*/}
            </div>
          <div className='separator'></div>
          <img id="perfil_foto" src={perfil_foto} alt="Profile Photo" />
        </div>
    </>
  )
}

//Função que faz a transição de texto
function TransitionText() {
    // Array com todas as palavras que queremos mostrar
    const words = ['Hello World!!', 'My name is Pedro', 'Full Stack Developer', 'Welcome!'];
    
    const [currentText, setCurrentText] = useState(words[0]);
    const [displayText, setDisplayText] = useState(words[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        // Avança para a próxima palavra no array
        setWordIndex(prev => (prev + 1) % words.length);
        setCurrentText(words[wordIndex]);
        setCurrentIndex(0);
      }, 3500);
  
      return () => clearInterval(interval);
    }, [wordIndex]);
  
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

export default App