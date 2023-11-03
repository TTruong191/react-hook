import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {
  const name = 'Tobie';
  const obj = { name: 'Obito', age: '25' }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with  React and name {name}</h1>
        <p>{JSON.stringify(obj)}</p>
        <button type='button'>Click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
