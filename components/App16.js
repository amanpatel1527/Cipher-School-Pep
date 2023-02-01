import React from 'react';
import { createContext } from 'react';
import CompA from '../Context/CompA';
const firstName = createContext()
const MiddleName = createContext()
const lastName = createContext()

export default function App16() {
    return (
        <div>
            <firstName.Provider value={"Aman"}>
                <lastName.Provider value={"Patel"}>
                    <MiddleName.Provider value={"Jitendra"}>
                        <CompA />
                    </MiddleName.Provider>
                </lastName.Provider>
            </firstName.Provider>

        </div>
    );
}
export { firstName }
export { lastName }
export { MiddleName }
