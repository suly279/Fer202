// import '../style/FirstTeenager.css'

function FirstTeenager() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" }
    ];

    const arrTeenager = people.filter(people => people.age >= 10 && people.age <= 20)

    return (
        <div>
            <h1>5. First teenager:</h1>
            <p>{arrTeenager[0]?.name || "No Teenager"}</p>
        </div>
    )
}
export default FirstTeenager;
