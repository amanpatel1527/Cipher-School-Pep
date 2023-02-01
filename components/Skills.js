import React from 'react'
import Fskills from './Fskills'

export default function Skills() {
    const skills = [
        ["HTML", 10],
        ["CSS", 9],
        ["JS", 7],
        ["React", 8],
    ]
    return (
        <div>

            <Fskills skills={skills}/>
        </div>
    )
}





// Error Code
// import React from 'react'
// import Skills from './Skills';
// export default function Fskills() {
// const skills = [
// ["html",8],
// ["css",8],
// ["js",8],
// ["hfg",8]
// ]
// return (
// <div>
// <Skills skill={skills}/>
// </div>
// )
// }