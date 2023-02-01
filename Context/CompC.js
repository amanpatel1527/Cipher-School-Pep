import React from 'react';
import { firstName, lastName, MiddleName } from '../components/App16';
export default function CompC() {
    return (
    <div>
        <firstName.Consumer>
            {(fname) => {
                return (
                    <lastName.Consumer>
                        {(lname) => {
                            return (
                                <MiddleName.Consumer>
                                    {(mName) => {
                                        return <h1>My Full Name is {fname} {mName} {lname} </h1>
                                    }}
                            </MiddleName.Consumer>
                                )
                        }}
                    </lastName.Consumer>
                )
            }}
        </firstName.Consumer>
    </div>
    );
}
