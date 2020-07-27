import React, {useState} from "react";

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
    let [contacts,setContacts] = useState(data);

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