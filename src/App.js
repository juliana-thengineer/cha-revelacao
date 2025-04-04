import { useState } from 'react';
import './App.css';
import urso from './urso.png';

function App() {
  const [isScaled, setIsScaled] = useState(false);

  const handleClick = () => {
    setIsScaled(!isScaled);
  };

  const background = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isScaled ? '#90CAF9' : '#FFE4B5',
  };

  const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const mainTitle = {
    fontSize: '5em',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'baby',
    margin: '20px auto',
  };

  const babyName = {
    fontSize: '8em',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'babyName',
    margin: '20px auto',
  };

  const bear = {
    width: 300,
    animation: 'bearScale 1s ease-in infinite',
  };

  return (
    <div className='App'>
      <div style={background}>
        <div style={container}>
          <h1 style={mainTitle}>Eu sou...</h1>

          {!isScaled && <img src={urso} style={bear} onClick={handleClick} />}

          {isScaled && (
            <>
              <h1 style={babyName}>Heitor</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
