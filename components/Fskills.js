
// Main Code
import React from 'react';
const GSkill = ({ skills: [tech, level] }) => <li>
    {tech},{level}</li>
function Fskills({ skills }) {
    const skillList = skills.map((x) => <GSkill skills={(x)} />)
    return (
        <div>
            <h1><ul>{skillList}</ul></h1>
        </div>
    );
}

export default Fskills;


// import React from 'react'
// const GSkill = ({ skills: [tech, level] }) => <li>{tech},{level}</li>
// export default function Fskills({ skills }) {
//     const skillList = skills.map((x) => <GSkill skills={(x)} />)
//     return (
//         <div>
//             <h1> <ul>{skillList}</ul> </h1>
//         </div>
//     )
// }



// Error
// import React from 'react';

// const GSkill = ({ skill: [tech, level]}) =>
// <li>{tech} {level}</li>

// export default function Skills(kills) {
// const skillList = kills.map((x)=>
// <GSkill skill={(x)}/>)

// return (
// <div>
// <ul>{skillList}</ul>
// </div>
// );
// }



