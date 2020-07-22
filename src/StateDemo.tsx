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
    constructor(props: IStateDemoProps) {
        super(props);

        // Initialize the State
        this.state = {
            count: 0,
            timestamp: new Date().getTime(),
            message: this.props.info as string
        };
    }

    public render(): JSX.Element {
        return <div>
            <h3>State values</h3>
            {this.state.count} <br /> {this.state.timestamp} <br /> {this.state.message} <br />

            <input type="button" value=" Change " onClick={() => {
                this.setState({
                    count: this.state.count + 1
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

                /*this.setState((prevState,props) => {
                    // Carry out any processing using prevState and props

                    return {
                        count: prevState.count + 1,
                        timestamp: new Date().getTime()
                    };

                }*/