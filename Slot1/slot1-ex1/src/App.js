import logo from './logo.svg';
import './App.css';

function App() {
  const person = {
    age: 20,
    name: "Suly",
  };
  return(
    <div className="App">
      <h1 style= {{textAlign:'center'}}>
        Hello, {person.name}, {person.age}
      </h1>
    </div>
  );
}

export default App;
