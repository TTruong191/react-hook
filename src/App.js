import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

function App() {
  // const name = 'Tobie';
  // const obj = { name: 'Obito', age: '25' }
  const [name, setName] = useState('Tobie') 
  const [address, setAddress] = useState('')
  const [todos, setTodo] = useState([
    { id: 'todo1', title: 'Chơi game' },
    { id: 'todo2', title: 'Đá bóng' },
    { id: 'todo3', title: 'Hít đất' }
  ])

  const handleEventClick = (event) => {
    if(!address) {
      alert('empty title')
      return;
      }
  const todo = { id: 'todo4', title: address}
   setTodo([...todos, todo])
   setAddress('')
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
        <div className='todo-container'>
          {todos.map(todo => {
            return(
            <li className='todo-child' key={todo.id}>{todo.title}</li>
            )
          })}
          
        </div>

        <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)}  />
        <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
        
      </header>
    </div>
  );
}

export default App;
