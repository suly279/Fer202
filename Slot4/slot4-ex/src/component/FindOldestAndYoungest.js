function FindOldestAndYoungest() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" }
    ];

    const youngest = people.reduce((youngest, person) => 
        person.age < youngest.age ? person : youngest, people[0]);

    const oldest = people.reduce((oldest, person) => 
        person.age > oldest.age ? person : oldest, people[0]);

    return (
        <div>
            <h1>9. Find the Oldest and Youngest Person:</h1>
            <p><strong>Youngest: </strong> {youngest.name}, {youngest.age}, {youngest.occupation}</p>
            <p><strong>Oldest: </strong> {oldest.name}, {oldest.age}, {oldest.occupation}</p>
        </div>
    );
}

export default FindOldestAndYoungest;
