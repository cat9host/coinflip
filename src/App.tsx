import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentResult, updateResult] = useState(false)
  const [variation, setVariation] = useState(0)
 const flip = () => {
   setIsFlipped(false)
   const variation = Math.random();
   setVariation(variation)
   updateResult(variation < 0.5)
   setIsFlipped(true)
 }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Vite + React = CoinFlip</h3>
      <div className="result">
        {isFlipped && (
            <>
          <div>
            <h1 style={{color: currentResult ? 'green' : 'red'}}>{currentResult ? 'YOU WON' : 'NEXT TIME...'}</h1>
          </div>
          <div>
            <p>cf {String(variation)}</p>
          </div>
            </>
        )}
      </div>
      <div className="card">
        <button onClick={() => flip()}>
          Flip the COIN
        </button>
      </div>
    </>
  )
}

export default App
