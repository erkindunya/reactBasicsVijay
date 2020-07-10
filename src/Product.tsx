import * as React from 'react';

import "./App.css";

interface IProductProps {

    id: number;
    name: string;
    cat: string;
    price: number;
}


export class Product extends React.Component<IProductProps, any> {

    constructor(props: IProductProps) {
        super(props);

    }

    public render(): JSX.Element {
        return <div className="product">

            {this.props.id} <br />
            {this.props.name} <br />
            {this.props.cat} <br />
            {this.props.price} <br />
        </div>;

    }
}