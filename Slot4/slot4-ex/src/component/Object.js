function Object() {
    const person = {
        name: "John",
        age: "39",
        occupation: "Software Developer"
    };

    return (
        <div>
            <h1>2. Display a person's details</h1>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>Age:</strong> {person.age}</p>
            <p><strong>OOccupation:</strong> {person.occupation}</p>
        </div>
    );

}

export default Object;
