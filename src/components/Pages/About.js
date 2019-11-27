import React from 'react'

function About() {
    return (
        // papra functions / componentes menores tem <React.Fragment> </React.Fragment> , nao vai aparecer no DOM mas precisa para JSX
        <div>
            <h1>Sobre</h1>
            <p>Versao 0.1</p> 
        </div>
    )
}
export default About;
