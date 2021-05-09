import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "80vh",
        margin: "50px auto",
    }
    return (
        <div style={myStyle} >
            <div className="container text-center border border-5 rounded border-primary box py-5 px-5">
                <h4 >
                    <strong>This Project is all about Todos<i>"My Todos List"</i>. I have created Todo application in which we can Add or Delete all Todos</strong>
                </h4>
                <h4 >
                    <strong>It is based on React.js as frontend with many components and using localstorage for storing data locally.</strong>
                </h4>
            </div>
        </div >
    )
}
