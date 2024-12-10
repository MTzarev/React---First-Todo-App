import logo from './logo.svg';
import './App.css';
import NewTodoList from './components/NewTodoList';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <NewTodoList/>
        <img src={logo} className="App-logo" alt="logo" />
        
    
      </header>
    </div>
    </>
  );
}

export default App;
