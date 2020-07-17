import React from "react";

export class Register extends React.Component<any, any> {
  private nameRef = React.createRef<HTMLInputElement>();
  private emailRef = React.createRef<HTMLInputElement>();
  private phoneRef = React.createRef<HTMLInputElement>();

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

                Name: <input ref={this.nameRef} type="text" name="name" onChange={this.handleChange} /> <br />

                Email: <input ref={this.emailRef} type="text" name="email" onChange={this.handleChange} /> <br />

                Phone: <input ref={this.phoneRef} type="text" name="phone" onChange={this.handleChange} /> <br /><br />
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

      <input type="button" value=" Register " onClick={this.handleClick.bind(this)} /><br /><br />

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

  private handleClick() {
    // Validate Form
    if ((this.nameRef.current as HTMLInputElement).value.trim() == "") {
      alert("Name cannot be blank");
      (this.nameRef.current as HTMLInputElement).focus();
      return;
    }
    if ((this.emailRef.current as HTMLInputElement).value.trim() == "") {
      alert("Email cannot be blank");
      (this.emailRef.current as HTMLInputElement).focus();
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test((this.emailRef.current as HTMLInputElement).value.trim()) === false) {
      alert("Invalid Email ID!");
      (this.emailRef.current as HTMLInputElement).focus();
      return;
    }

    if ((this.phoneRef.current as HTMLInputElement).value.trim() == "") {
      alert("Phone cannot be blank");
      (this.phoneRef.current as HTMLInputElement).focus();
      return;
    }

    // Final
    this.setState({
      name: (this.nameRef.current as HTMLInputElement).value,
      email: (this.emailRef.current as HTMLInputElement).value,
      phone: (this.phoneRef.current as HTMLInputElement).value,
    });

    // Send to some service
  }

  private handleChange = (event: any) => {
    /*let name = event.target.name;

    this.setState({
        [name]: event.target.name ==="subscribe" ? event.target.checked : event.target.value
    });*/
  }

}
