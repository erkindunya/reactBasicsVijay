import React from "react";
import { InvoiceProvider } from "./InvoiceProvider";
import { IInvoice } from "./common/IInvoice";

interface IInvoicesProps {
    provider: InvoiceProvider;
}

export class Invoices extends React.Component<IInvoicesProps, any> {
    constructor(props: IInvoicesProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    public componentDidMount() {
        this.setState({
            data: this.props.provider.getInvoices()
        });
    }

    public render(): JSX.Element {
        return <div>
            <h2>Invoices</h2>
            {this.state.data.map((i: IInvoice) => <div key={i.invno}>
                Invoice No: {i.invno} <br />
                Date: {i.invdate.toDateString()} <br />
                Customer: {i.customer} <br />
                Amount:  {i.amount}
            </div>)}

            <input type="button" value="Add Item" onClick={() => {
                this.props.provider.addInvoice({
                    invno: 1003,
                    invdate: new Date(),
                    customer: "ABC",
                    amount: 7541
                });

                this.setState({
                    data: this.props.provider.getInvoices()
                });

            }} />

        </div>;
    }
}

