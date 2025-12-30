import React from "react"
import ReactDOM from "react-dom/client"


function Hello(){
    return <h1>My first component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello/>);