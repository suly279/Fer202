function AverageAgeByOccupation() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" }
    ];

    const averageAgeByOccupation = people.reduce((group, person) => {
        const { occupation, age } = person;
        if (!group[occupation]) {
            group[occupation] = { totalAge: 0, count: 0 };
        }
        group[occupation].totalAge += age;
        group[occupation].count += 1;
        return group;
    }, {});

    const result = Object.entries(averageAgeByOccupation).map(([occupation, data]) => ({
        occupation,
        averageAge: (data.totalAge / data.count).toFixed(2) // Làm tròn 2 chữ số thập phân
    }));

    return (
        <div>
            <h1>10. Average Age by Occupation:</h1>
            {result.map(({ occupation, averageAge }) => (
                <div key={occupation} style={{ marginBottom: "1em" }}>
                    <strong>{occupation}:</strong>
                    <p>- Average Age: {averageAge}</p>
                </div>
            ))}
        </div>
    );
}

export default AverageAgeByOccupation;
