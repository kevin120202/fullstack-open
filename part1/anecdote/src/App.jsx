import { useState } from 'react'


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const handleNext = () => {
        const randomNum = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomNum)
    }

    const handleVote = () => {
        setVotes(prev => {
            const copy = [...prev]
            copy[selected] += 1
            return copy
        })
    }

    const getMostVotesAnecdote = () => {
        let index = 0
        let largest = votes[0]
        for (let i = 1; i < votes.length; i++) {
            if (votes[i] > largest) {
                largest = votes[i]
                index = i
            }
        }
        return <p>{anecdotes[index]} has {largest} votes</p>
    }

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>Votes: {votes[selected]}</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleNext}>next anecdote</button>
            <p>Anecdotes with most votes</p>
            {getMostVotesAnecdote()}
        </div>
    )
}

export default App
