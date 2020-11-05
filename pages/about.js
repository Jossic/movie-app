import React from 'react';

// Functionnal component
const About = () => {
    const message = "Hello from Next JS"
    return (
        <h1>{message}</h1>
    )
}

// Class component
// class About extends React.Component {

//     render() {
//         return (
//             <h1>Composant classe</h1>
//         )
//     }
// }


export default About
