function SortByOccupationAndAge() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" },
    ];

    const sortedPeople = [...people].sort((a, b) => {
        if (a.occupation === b.occupation) {
            return a.age - b.age; 
        }
        return a.occupation.localeCompare(b.occupation); 
    });

    const groupedByOccupation = sortedPeople.reduce((group, person) => {
        const { occupation } = person;
        if (!group[occupation]) {
            group[occupation] = [];
        }
        group[occupation].push(`${person.name}, ${person.age}`);
        return group;
    }, {});

    return (
        <div>
            <h1>7. Sorted by Occupation and Age:</h1>
            {Object.entries(groupedByOccupation).map(([occupation, people]) => (
                <div key={occupation} style={{ marginBottom: "1em" }}>
                    <strong>{occupation}:</strong>
                    <ul>
                        {people.map((person, index) => (
                            <li key={index}>{person}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default SortByOccupationAndAge;
