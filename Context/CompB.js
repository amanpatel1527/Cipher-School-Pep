import React from 'react';
import { useContext } from 'react';
import { firstName, lastName,MiddleName } from '../components/App16';

export default function CompB() {
    const fname = useContext(firstName)
    const Mname = useContext(MiddleName)
    const lname = useContext(lastName)
    return (
        <div>
            <h1>My Name is {fname} {Mname} {lname}</h1>
        </div>
    );
}
