import React, { useEffect } from "react";

const App = () => {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  // Task 1: Print the name of each company on console using forEach
  useEffect(() => {
    companies.forEach((company) => {
      console.log(company.name); // Print company name
    });

    // Task 2: Print the name of each company that started after 1987 on console
    companies
      .filter((company) => company.start > 1987)
      .forEach((company) => {
        console.log(company.name); // Print company name
      });
  }, [companies]);

  // Task 3: Filter and increment the start year for Retail companies
  const retailCompanies = companies
    .filter((company) => company.category === "Retail")
    .map((company) => ({
      ...company,
      start: company.start + 1, // Increment start year by 1
    }));

  return (
    <div>
      <h1>Retail Companies</h1>
      {retailCompanies.map((company, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {company.name}</p>
          <p><strong>Category:</strong> {company.category}</p>
          <p><strong>Start:</strong> {company.start}</p>
          <p><strong>End:</strong> {company.end}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
