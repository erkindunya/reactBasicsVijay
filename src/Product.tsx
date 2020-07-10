import * as React from 'react';

import "./App.css";
import { IProduct } from "./common/IProduct";

interface IProductProps {
    item: IProduct
}

export class Product extends React.Component<IProductProps, any> {
    constructor(props: IProductProps) {
        super(props);

    }

    public render(): JSX.Element {
        return <div className="product">
            {this.props.item.id} <br />
            {this.props.item.name}  <br />
            {this.props.item.cat} <br />
            {this.props.item.price}
        </div>;
    }
}