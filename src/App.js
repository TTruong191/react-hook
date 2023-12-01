import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Movie from './views/Movie';
import Countdown from './views/Countdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  // const name = 'Tobie';
  // const obj = { name: 'Obito', age: '25' }
  const [name, setName] = useState('Tobie')
  const [address, setAddress] = useState('')
  const [todos, setTodo] = useState([
    { id: 'todo1', title: 'Chơi game', type: 'A1' },
    { id: 'todo2', title: 'Đá bóng', type: 'A1' },
    { id: 'todo3', title: 'Hít đất', type: 'A2' },
    { id: 'todo4', title: 'Bóng chuyền', type: 'A2' }
  ])

  const handleEventClick = (event) => {
    if (!address) {
      alert('empty title')
      return;
    }

    const todo = { id: Math.floor((Math.random() * 100) + 1), title: address }
    setTodo([...todos, todo])
    setAddress('')
  }

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value)
  }

  const handleDeleteTodo = (id) => {
    let newTodos = todos
    newTodos = newTodos.filter(item => item.id !== id)
    setTodo(newTodos)
  }

  useEffect(() => {
    console.log('run todo')
  }, [])

  const onTimesup = () => {
    // alert('Times up')
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          {/* <p>{JSON.stringify(obj)}</p> */}
        </header>
        <Switch>
          <Route exact path="/">
            <Movie />
          </Route>
          <Route path="/timer">
            <h1>Hello world with  React and name {name}</h1>
            <Countdown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title="All todo"
              handleDeleteTodo={handleDeleteTodo}
            />
            {/* <Todo
              todos={todos.filter(item => item.type === "A1")}
              title="Type todo"
              handleDeleteTodo={handleDeleteTodo}
            /> */}
            <input type="text" value={address} onChange={(event) => handleOnchangeInput(event)} />
            <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
