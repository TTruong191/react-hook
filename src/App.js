import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
  // const name = 'Tobie';
  // const obj = { name: 'Obito', age: '25' }
  const [name, setName] = useState('Tobie') 
  const [address, setAddress] = useState('')

  const handleEventClick = (event) => {
    setName(address)
    console.log(address)
  }
  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)

  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with  React and name {name}</h1>
        {/* <p>{JSON.stringify(obj)}</p> */}

        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)}  />
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
        
      </header>
    </div>
  );
}

export default App;
