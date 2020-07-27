import * as React from "react";

export interface ICounterProps {
    initial: number;
}

// <Counter initial={ 1 } />
export function Counter(props: ICounterProps) : JSX.Element {
    let [count,setCount] = React.useState(props.initial);

    return <div>
        Count: { count } <br/>

        <input type="button" value=" + " onClick={ () => {
            setCount(count+1);
            console.log("Count=" + count);
        }} />
    </div>;
}