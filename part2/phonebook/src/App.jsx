import { useState } from 'react'

function Person(props) {
    return (<p>{props.name} {props.number}</p>)
}

function App() {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState("")

    const addPerson = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newName && person.number === newName)) {
            alert(`${newName} is already in the phonebook`)
            setNewName("")
            setNewNumber("")
        } else {
            setPersons((prevPersons) => {
                return [...prevPersons, {
                    name: newName,
                    number: newNumber,
                    id: prevPersons.length + 1
                }]
            })
            setNewName("")
            setNewNumber("")
        }
    }

    const handleNewName = (e) => {
        setNewName(e.target.value)
    }

    const handleNewNumber = (e) => {
        setNewNumber(e.target.value)
    }

    const person = persons.map(person => {
        return <Person key={person.name} name={person.name} number={person.number} />
    })

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with
                <input />
            </div>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={handleNewName} /></div>
                <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
                <div><button type="submit">add</button></div>
            </form>
            <h2>Numbers</h2>
            {person}
        </div>
    )
}

export default App
