import logo from './logo.svg';
import './App.css';

function App() {
  const people = [
    {age: 20, name: "Suly",},
    {age: 25, name: "Skylar",},
    {age: 25, name: "Cirrus",},
    {age: 26, name: "Jaekyung",},
    {age: 28, name: "KimDan",}
  ];
  people.map(
    (people, index) => `${index + 1}. ${people.name}, ${people.age}`
  )
  return(
    <div className="App">
      <ul>
        {people.map((people, index) => (
          <li key={index}>{people.name}, {people.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
