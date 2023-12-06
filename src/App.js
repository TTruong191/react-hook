import './App.css';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import Movie from './components/Movie';
import Countdown from './components/Countdown';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import DetailBlog from './components/DetailBlog';
import AddNewBlog from './components/AddNewBlog';
import NotFound from './components/NotFound';

const App = () => {
  // const name = 'Tobie';
  // const obj = { name: 'Obito', age: '25' }
  // const [name, setName] = useState('Tobie')
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
    <div className="App">
      <Nav />
      <header className="App-header">
        {/* <p>{JSON.stringify(obj)}</p> */}
      </header>
      <Routes>
        <Route  path="/" element={<Movie />} />
        <Route  path="/timer" element={<Countdown onTimesup={onTimesup} />} />
        <Route  path="/todo" element={
          <>
          <Todo
            todos={todos}
            title="All todo"
            handleDeleteTodo={handleDeleteTodo}
          />
          <input type="text" value={address} onChange={handleOnchangeInput} />
          <button type='button' onClick={handleEventClick}>Click me</button>
        </>
      } />
      <Route  path="/blog" element={<Blog />} />
      <Route  path="/blog/:id" element={<DetailBlog />} />
      <Route  path="/add-blog" element={<AddNewBlog />} />
      <Route path="*" element={<NotFound />} />
      </Routes >
    </div>
  );
}

export default App;
