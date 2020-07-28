import * as React from "react";

import { MessageContext } from "./common/MessageContext";

import { Display } from "./Display";
import { IMessage } from "./common/IMessage";

export class ContextDemo extends React.Component<any,any> {
    public render() : JSX.Element {
        let message : IMessage = {
            message: "Ola",
            time: new Date().getTime()
        };

        return <MessageContext.Provider value={ message }>
                <Display />
            </MessageContext.Provider>;   
    }
}

