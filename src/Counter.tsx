import * as React from "react";

export interface ICounterProps {
    initial: number;
}

// <Count initial={ 1 } />
export function Counter(props: ICounterProps) : JSX.Element {
    let count : number = props.initial;

    return <div>
        Count: { count } <br/>

        <input type="button" value=" + " onClick={ () => {
            count++;
        }} />
    </div>;
}