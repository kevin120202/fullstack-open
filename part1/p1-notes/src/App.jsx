import { useState } from 'react'

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
    )
}

const App = () => {
    const name = 'Peter'
    const age = 10
    return (
        <>
            <p>Hello world</p>
            <Hello name="Kevin" age={21} />
            <Hello name={name} age={age} />
        </>
    )
}


export default App
