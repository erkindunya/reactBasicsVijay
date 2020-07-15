// Condiotional Rendering Example
import React from "react";
import "./App.css";


// <RenderDemo flag={true} />

export function RenderDemo(props: any): JSX.Element {
    return <div>
        {props.flag ? <span>"Hello"</span> : <span>"Hi!"</span>} <br />
        {props.hide ? null : <Message text="Hi this is the message component" />}

    </div>;
}

export function Message(props: any): JSX.Element {

}