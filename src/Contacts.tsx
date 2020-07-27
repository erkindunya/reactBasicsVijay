import React, {useState, useEffect} from "react";

interface IContact {
    name: string;
    email: string;
};

const data : IContact[] = [
    {
        name: "john",
        email: "john@anbc.com"
    },
    {
        name: "ram",
        email: "ram@anbc.com"     
    },
    {
        name: "Andy",
        email: "andy@abc.com"
    }
];

export function Contacts() : JSX.Element {
    let flag : number = 0;

    let [contacts,setContacts] = useState(data);

    useEffect(()=> {
        // LIKE componentDidMount - Fires only once after render
        console.log("ComponentDidMount->Fired after render!");
        flag = 1;
    },[flag]);

    useEffect(()=> {
        // LIKE componentDidUpdate - Fires after ever render
        console.log("CompoentDidUpdate->Fired after render!");
    });

    console.log("Render firing...");
    return <div>
        {
            contacts.map((c: IContact) => <div>
                    { c.name } : { c.email }
                </div>)
        }
        <div>
            <input type="button" value=" change "
                onClick={ ()=> {
                    if(contacts.length > 0) {
                        let newContacts = [...contacts];
                        newContacts.pop();

                        setContacts(newContacts);
                    }
                }} />
        </div>
    </div>;
}