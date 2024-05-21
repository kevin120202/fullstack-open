import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = (props) => {
    const parts = props.parts.map(part => {
        return <Part key={part.id} part={part.name} exercise={part.exercises} />
    })

    return (
        <div>
            {parts}
            <Total parts={props.parts} />
        </div>
    )
}

export default Content