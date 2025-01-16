function AreAllTeenagers() {
    const people = [
        { name: "John Doe", age: 30, occupation: "Software Developer" },
        { name: "Jane Smith", age: 15, occupation: "Graphic Designer" },
        { name: "Alice Johnson", age: 28, occupation: "Software Developer" },
        { name: "Bob Brown", age: 35, occupation: "Architect" }
    ];

    const arrTeenager = people.filter(people => people.age >= 10 && people.age <= 20)

    const checkAllAreTeenager = () => {
        if (arrTeenager.length === people.length) return true
        else return false
      }

    return (
        <div>
            <h1>6. Are all Teenagers?: {checkAllAreTeenager() ? "true" : "false"}</h1>
        </div>
    )
}
export default AreAllTeenagers;