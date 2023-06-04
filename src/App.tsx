import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };
  const buttonStyle = {
    backgroundColor: isOn ? 'red' : 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

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
      <h1>Vite + React</h1>
      <div className="card">

        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>


        <button onClick={handleClick}style={buttonStyle}>
        {isOn ? 'Off' : 'On'}
        </button>




      </div>
      
    </>
  )
}

export default App
