import * as React from "react";

interface IStateDemoProps {
    info?: string; // optional properties
}

interface IStateDemoState {
    count: number;
    timestamp: number;
    message: string;
}

export class StateDemo extends React.Component<IStateDemoProps, IStateDemoState> {
    private msg: string = "Render Fired!";

    constructor(props: IStateDemoProps) {
        super(props);

        // Initialize the State
        this.state = {
            count: 0,
            timestamp: new Date().getTime(),
            message: this.props.info as string
        };
    }

    public componentDidMount() {
        console.log("ComponentDidMount->Before State State : " + this.state.count);

        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log("ComponentDidMount->Post State State Callback : " + this.state.count);
            });

        console.log("ComponentDidMount->After State State : " + this.state.count);

        console.log("Updating state 3 times....");
        this.msg = "** Render fired!";

        this.setState({
            count: this.state.count + 1
        }, () => {
            this.setState({
                count: this.state.count + 3,
                timestamp: new Date().getTime()
            }, () => {
                this.setState({
                    count: this.state.count + 2
                });
            });
        });





    }

    public render(): JSX.Element {
        console.log(this.msg);

        return <div>
            <h3>State values</h3>
            {this.state.count} <br /> {this.state.timestamp} <br /> {this.state.message} <br />

            <input type="button" value=" Change " onClick={() => {
                this.setState((prevState, props) => {
                    // Carry out any processing using prevState and props

                    return {
                        count: prevState.count + 1,
                        timestamp: new Date().getTime()
                    };
                },
                    () => {
                        console.log("State state completed!");
                        console.log("After state state complete-" + this.state.count);
                    });

                // Immediately after set state
                console.log("Immediately after : " + this.state.count);

            }} />
        </div>
    }
}

/*

                /*this.setState(*/