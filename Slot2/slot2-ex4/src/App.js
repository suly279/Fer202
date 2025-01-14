import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App() {
  var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ]
  const arrTeenager = people.filter(people => people.age >= 10 && people.age <= 20)

  const checkFullTeen = () => {
    if (arrTeenager.length === people.length) return true
    else return false
  }

  // --------------------------------------------------------------------------------------------

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  
  const { address: { street } } = person;

  companies.map(
    (companies, index) => `${index + 1}. ${companies.name}`
  )

  const conpaniesAfter1987 = companies.filter((companies) => companies.start > 1987)

  const retailCompanies = companies.filter((companies) => companies.category === "Retail").
  map((companies) => ({ ...companies, start: companies.start + 1, }));

  const sortedBaseOnEndDate = [...companies].sort((a, b) => a.end - b.end);

  const sortedAges = [...ages].sort((a, b) => b - a);

  const sum = ages.reduce((a, b) => {
    return a + b;
  }, 0);

  const newObject = { ...companies[0] }

  const sumNumber = (...numbers) => numbers.reduce((total, num) => total + num, 0)
  
  const copyToArr = (...args) => {
    const resultArr = []
    args.forEach(args => {
      if (Array.isArray(args)) {
        resultArr.push(...args)
      } else {
        resultArr.push(args)
      }
    })
    return resultArr
  }

  const [count, setCount] = useState(0)
  const handleCount = () => {
    setCount(count + 1)
  }

  const url = "https://example.com?page=1&size=10&age=20&name=ngan"
  const [parsedParams, setParsedParams] = useState({});
  const handleParseUrl = () => {
    const queryString = url.split('?')[1]
    if (!queryString) {
      setParsedParams({})
      return;
    }
    const pairs = queryString.split('&')
    const queryParams = {}
    pairs.forEach(pair => {
      const [key, value] = pair.split('=')
      queryParams[key] = value
    })
    setParsedParams(queryParams)
  }

  return (
    <div className="App">
      <h1> Hello <span style={{ color: 'blue', fontWeight: "bold" }}>React</span></h1>

      <img src={logo} className="App-logo" alt="logo" />
      <p style={{ margin: 0, color: "#1D5F72", fontStyle: "italic" }}>This is the React logo!</p>
      <p style={{ margin: 0, color: "#B0B0B0", fontStyle: "italic", fontSize: 12 }}>(I don't know why it is here either)</p>
      <p style={{ color: "black", fontSize: 18 }}>This library for web and native user interfaces</p>

      <div style={{ backgroundColor: "#555555", width: "100%", padding: "10px 0" }}>
        <nav class="navbar" style={{ margin: "0 10px" }}>
          <ul class="nav-list">
            <li style={{ backgroundColor: "Green" }}><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Contact</a></li>
            <li style={{ backgroundColor: "black" }}><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>

      <h1 style={{ color: 'blue', fontWeight: "bold" }}>This is JSX</h1>

      <h1>Course names</h1>
      <ul>
        <li>React</li>
        <li>ReactNative</li>
        <li>NodeJs</li>
      </ul>

      {/* -------------------------------------------------------------------------------- */}

      <h1>First teenager:</h1>
      <p>{arrTeenager[0]?.name || "No Teenager"}</p>

      <h1>People array is teenager:</h1>
      <ul>
        {arrTeenager.map((people, index) => (
          <li key={index}>
            {people.name}
          </li>
        ))}
      </ul>

      <h1>
        Every person of the people array is teenager: {checkFullTeen() ? "true" : "false"}
      </h1>

      <h1>
        Any person of the people array is teenager: {!checkFullTeen() ? "true" : "false"}
      </h1>

      {/* -------------------------------------------------------------------------------- */}

      <h1>1. Company list</h1>
      <ul>
        {companies.map((companies, index) => (
          <li key={index}>{companies.name}</li>
        ))}
      </ul>
      <h1>2. List of companies has start after 1987</h1>
      <ul>
        {conpaniesAfter1987.map((companies, index) => (
          <li key={index}>{index + 1}, {companies.name}, {companies.start}</li>
        ))}
      </ul>
      <h1>3. List of companies has Retail's category</h1>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>

        <tbody>
          {retailCompanies.map((companies, index) => (
            <tr key={index}>
              <td>{companies.name}</td>
              <td>{companies.category}</td>
              <td>{companies.start}</td>
              <td>{companies.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>4. Sort companies by end date</h1>
      <ul>
        {sortedBaseOnEndDate.map((companies, index) => (
          <li key={index}>
            {companies.name} - End: {companies.end}
          </li>
        ))}
      </ul>
      <h1>5. Sort ages</h1>
      <ul>
        {sortedAges.map((age, index) => (
          <li key={index}>{age}</li>
        ))}
      </ul>
      <h1>6. Sum of age using reduce: {sum} </h1>

      <h1>7. New Object</h1>
      <p>Name: {newObject.name}
        <br></br>
        Category: {newObject.category}
      </p>

      <h1>8. Sum numbers</h1>
      <p>
        Sum of 10, 20, 30, 40, 50 is: {sumNumber(10, 20, 30, 40, 50)}
      </p>

      <h1>9. Add To Array</h1>
      <p>{JSON.stringify(copyToArr(1, 2, [3, 4], 5, [6, 7], "hello"))}</p>

      <h3>10. Destructuring the property street: {street}</h3>

      <h1>11. Increment Counter</h1>
      <button onClick={handleCount}>Chock chock: {count}</button>

      <p style={{textAlign: "center"}}>12. Input:<br></br> "https://example.com?page=1&size=10&age=20&name=ngan" </p>
      <button onClick={handleParseUrl}>
        Click to destroy the URL
      </button>
      <p>Output:</p>
      <pre>{JSON.stringify(parsedParams, null, 2)}</pre>
    </div>
  );
}

export default App;
