import * as React from 'react';

import "./App.css";

import { Product } from "./Product";

interface IProduct {
    id: number;
    name: string;
    cat: string;
    price: number;
}

const data: IProduct[] = [
    {
        id: 1001,
        name: "Nose Plier",
        cat: "Tools",
        price: 345.34
    },
    {
        id: 1002,
        name: "Cutting Plier",
        cat: "Tools",
        price: 300.00
    },
    {
        id: 1003,
        name: "Hammer",
        cat: "Tools",
        price: 150.00
    },
    {
        id: 1004,
        name: "Drill",
        cat: "Tools",
        price: 900.00
    },
    {
        id: 1005,
        name: "Hacksaw",
        cat: "Tools",
        price: 95.00
    }
];

export class Products extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    public render(): JSX.Element {
        return <div>
            {
                data.map((p: IProduct) => <Product id={p.id} name={p.name} cat={p.cat} price={p.price} />)
            }
        </div>;
    }
}