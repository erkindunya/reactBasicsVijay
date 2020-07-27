import * as React from "react";

export interface ICounterProps {
    initial: number;
    book: IBook;
}

interface IBook {
    id: number;
    name: string;
}

// <Counter initial={ 1 } />
export function Counter(props: ICounterProps) : JSX.Element {
    let [count,setCount] = React.useState(props.initial);
    let [book,setBook] = React.useState(props.book);

    return <div>
        Count: { count } <br/>
        Book Info : <br/>
        { book.id } : { book.name }<br/>

        <input type="button" value="Change" onClick={ () => {
            setCount(count+1);

            let newName = "Sample book: " + new Date().getTime();

            setBook({
                name: newName,
                id: book.id
            });

            console.log("Count=" + count);
        }} />
    </div>;
}