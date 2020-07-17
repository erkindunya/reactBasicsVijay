import React from "react";

export class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "Vijay",
      email: "vijay@abc.com",
      phone: "044-78541254",
      subscribe: true,
      membership: "Free",
      payment: "3"
    };
  }

  public render(): JSX.Element {

    return <div>
      <h2>Register</h2>

                Name: <input type="text" name="name" onChange={this.handleChange} value={this.state.name} /> <br />

                Email: <input type="text" name="email" onChange={this.handleChange} value={this.state.email} /> <br />

                Phone: <input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} /> <br /><br />
      <input type="checkbox" name="subscribe" checked={this.state.subscribe} onChange={this.handleChange} /> Subscribe to newsletter <br />

      <label><h3>Choose Membership:</h3>
        <input type="radio" name="membership" value="Free" onChange={this.handleChange} /> Free Plan <br />
        <input type="radio" name="membership" value="Basic" onChange={this.handleChange} /> Basic Plan ($5/mo) <br />
        <input type="radio" name="membership" value="Premium" onChange={this.handleChange} /> Premium Plan ($7/mo) <br />
      </label><br />

                Payment By:
                <select name="payment" value={this.state.payment} onChange={this.handleChange}>
        <option value="1">Credit Card</option>
        <option value="2">Debit Card</option>
        <option value="3">Pay Pal</option>
      </select> <br /><br />

      <input type="button" value=" Register " /><br /><br />

      <div>
        Registration Information  <br />
                    Name: {this.state.name}<br />
                    Email: {this.state.email}<br />
                    Phone {this.state.phone}<br />
                    Subscribe: {this.state.subscribe ? "Yes" : "No"} <br />
                    Membership : {this.state.membership} <br />
                    Payment : {this.state.payment}
      </div>
    </div>;
  }

  private handleChange = (event: any) => {
    let name = event.target.name;

    this.setState({
      [name]: event.target.name === "subscribe" ? event.target.checked : event.target.value
    });
  }

}