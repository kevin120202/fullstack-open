import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part part={props.course[0].name} exercise={props.course[0].exercises} />
            <Part part={props.course[1].name} exercise={props.course[1].exercises} />
            <Part part={props.course[2].name} exercise={props.course[2].exercises} />
        </div>
    )
}

export default Content