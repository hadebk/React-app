import React from 'react';

const Contact = (props) => {

    /* {{ Programmatic Redirect }}
    // add props to Contact method as parameter
    // will wait for 2s and then redirect the pagr to 'about' page

    setTimeout(()=>{
        props.history.push("/about")
    },2000)
    */
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Ipsum veniam occaecat enim do officia culpa aliquip. Pariatur elit commodo esse incididunt nostrud veniam labore consectetur aliqua quis. Nisi nostrud labore esse incididunt ex ex non adipisicing nostrud sit pariatur fugiat nulla.</p>
        </div>
    )
}

export default Contact