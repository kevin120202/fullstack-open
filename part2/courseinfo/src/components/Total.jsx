import React from "react";

const Total = (props) => {
    const exercises = props.parts.map((item) => item.exercises)
    const total = exercises.reduce((acc, cur) => {
        return acc + cur
    }, 0)
    return (<h3>Number of exercises {total}</h3>)
}

export default Total