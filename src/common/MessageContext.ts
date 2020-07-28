import * as React from "react";
import { IMessage } from "./IMessage";

export const MessageContext = React.createContext<IMessage>({
    message: "Hello",
    time: new Date().getTime()
});