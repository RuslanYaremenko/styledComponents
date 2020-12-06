import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StDiv } from './styledComponents/Blocks'
import  { StLink } from './styledComponents/Text'

function App() {
  return (
    <StDiv className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          fontSize="18px"
        >
          Learn React
        </StLink>
      </header>
    </StDiv>
  );
}

export default App;
