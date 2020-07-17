import React from "react";

export class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "Enver",
      email: "dsdds@gmail.com",
      phone: "dsadsadsadsad"
    };
  }

  public render(): JSX.Element {

    return <div>
      <h2>Register</h2>
                Name: <input type="text" onChange={this.nameChanged} value={(this.state.name)} /> <br />
                Email: <input type="text" onChange={event => this.setState({ email: event.currentTarget.value })} value={(this.state.email)} /> <br />
                Phone: <input type="text" onChange={event => this.setState({ phone: event.currentTarget.value })} value={(this.state.phone)} /> <br /><br />
      <input type="button" value=" Register " /><br /><br />
      <div>
        Registration Information  <br />
                    Name: {this.state.name}<br />
                    Email: {this.state.email}<br />
                    Phone {this.state.phone}<br />
      </div>
    </div>;
  }

  private nameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: event.currentTarget.value
    });
  }
}
