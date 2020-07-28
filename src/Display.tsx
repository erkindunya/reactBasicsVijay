import * as React from "react";
import { MessageContext } from "./common/MessageContext";

import { IMessage } from "./common/IMessage";

export function Display() : JSX.Element  {
    let message : IMessage = React.useContext(MessageContext);
    let [time,setTime] = React.useState(message.time);

    return <div>
        { message.message } : { time } <br/>

        <input type="button" value="change" onClick={ () => {
            message.time = new Date().getTime();
            setTime(message.time);
        }} />
    </div>;
}