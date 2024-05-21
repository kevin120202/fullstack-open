import { useState } from 'react'

function Button(props) {
    return <button onClick={props.onClick}>{props.text}</button>
}

function Statistics(props) {
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (<p>No feedback given</p>)
    }

    const total = props.bad + props.good + props.neutral
    const sum = (props.bad * -1) + (props.good * 1) + (props.neutral * 0)
    const avg = sum / total
    const positivePercentage = (props.good / total) * 100


    return (
        <table>
            <tbody>
                <StatisticsLine text="good" value={props.good} />
                <StatisticsLine text="neutral" value={props.neutral} />
                <StatisticsLine text="bad" value={props.bad} />
                <StatisticsLine text="Total" value={total} />
                <StatisticsLine text="Average" value={avg} />
                <StatisticsLine text="Positive" value={positivePercentage} />
            </tbody>
        </table>
    )
}

function StatisticsLine(props) {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value} {props.text === "Positive" ? "%" : ""}</td>
        </tr>
    )
}

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodBtn = () => setGood(good + 1)

    const handleNeutralBtn = () => setNeutral(neutral + 1)

    const handleBadBtn = () => setBad(bad + 1)

    return (
        <div>
            <h1>Feedback</h1>
            <Button text="good" onClick={handleGoodBtn} />
            <Button text="neutral" onClick={handleNeutralBtn} />
            <Button text="bad" onClick={handleBadBtn} />
            <h2>Statistics</h2>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    )
}

export default App
