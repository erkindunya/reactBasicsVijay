//Conditional Rendering Example
import React from "react";
import "./App.css";

/*
    ** CONDITIONAL RENDERING **

    1. if condtion
    2. ternary operator - return different jsx
    3. null in ternary operator
    4. boolean && <JSX> 
    5. Function containing if else
    6. IFEE 

*/

// <RenderDemo flag={ true } hide={ false } show={ true }/>
export default function RenderDemo(props: any): JSX.Element {
    return <div>
        {props.flag ? <span>Hello</span> : <span>Hi!</span>} <br />

        {props.hide ? null : <Message text="Hi this is the message component" />}

        {
            props.show && <Message text="This shows if props.show=true" />
        }

        {
            ShowTag(true)
        }

        {
            (() => {
                if (props.show)
                    return <div>Showing</div>;

                return <div>Not showing</div>;
            })
        }
    </div>;
}

function ShowTag(flag: boolean): JSX.Element {
    if (flag)
        return <div>TRUE BLOCK</div>;

    return <div>FALSE BLOCK</div>
}

export function Message(props: any): JSX.Element {
    return <div>{props.text} </div>
}