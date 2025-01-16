function GroupByOccupation() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" }
    ];

    const groupedByOccupation = people.reduce((group, person) => {
        const { occupation } = person;
        if (!group[occupation]) {
            group[occupation] = [];
        }
        group[occupation].push(`${person.name}, ${person.age}`);
        return group;
    }, {});

    return (
        <div>
            <h1>8. Grouped by Occupation:</h1>
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

export default GroupByOccupation;
