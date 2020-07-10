import React from "react";

export class Hello extends React.Component<any,any> {
    constructor(props : any) {
        super(props);
    }

    public render() : JSX.Element {
        return  <div>
                    <h2>Hello World!</h2>
                    <div>
                    {
                        new Date().toTimeString()
                    }
                    </div>
                </div>;
    }
}