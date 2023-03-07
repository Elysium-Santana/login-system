import Home from './Componets/Routes/Home';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import React from 'react';

function App() {
  const [colorTheme, setColorTheme] = React.useState('blueviolet');
  document.documentElement.style.setProperty('--color-theme', colorTheme);

  function changeColor(event) {
    const color = event
      .getAttribute('style')
      .replace('background:', '')
      .replace(';', '');
    setColorTheme(color);
  }

  return (
    <div className="App">
      <div className="bxColor">
        <div
          className="color"
          style={{ background: '#A53692' }}
          onClick={({ target }) => changeColor(target)}
        ></div>

        <div
          className="color"
          style={{ background: '#D9B30B' }}
          onClick={({ target }) => changeColor(target)}
        ></div>
        <div
          className="color"
          style={{ background: '#A87F3C' }}
          onClick={({ target }) => changeColor(target)}
        ></div>
        <div
          className="color"
          style={{ background: 'blueviolet' }}
          onClick={({ target }) => changeColor(target)}
        ></div>
        <div
          className="color"
          style={{ background: '#57A695' }}
          onClick={({ target }) => changeColor(target)}
        ></div>
      </div>
      <BrowserRouter>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
