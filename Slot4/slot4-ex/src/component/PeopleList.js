import '../style/PeopleList.css'

function PeopleList() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" }
    ];

    return (
        <div>
            <h1>3. People list</h1>
            <ul>
                {people.map((people, index) => (
                    <li key={index}>{people.name}, {people.age}, {people.occupation}</li>
                ))}
            </ul>

            <h1>4. People table</h1>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>

                <tbody>
                    {people.map((people, index) => (
                        <tr key={index}>
                            <td>{people.name}</td>
                            <td>{people.age}</td>
                            <td>{people.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default PeopleList;
