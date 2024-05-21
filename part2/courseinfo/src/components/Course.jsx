import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = (props) => {

    return (
        <div>
            <Header name={props.courses.name} />
            <Content parts={props.courses.parts} />
        </div>
    )
}

export default Course