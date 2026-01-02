import React from "react"
import ReactDOM from "react-dom/client"

// const firstBook = {
//     title : 'El Jaiz wa ghair Ljaiz fi nikah L3ajaiz',
//     author : 'mohamed ouallou',
// }

// const secondBook = {
//     title : 'fuck Lwatan',
//     author : 'Hokage 6',
// }

const Books = [
    {
        title : 'El Jaiz wa ghair Ljaiz fi nikah L3ajaiz',
        author : 'mohamed ouallou',
    },
    {
        title : 'fuck Lwatan',
        author : 'Hokage 6',
    }
]

const Names = ['Salah','Mohamed','Amine'];
const newNames = Names.map((name) => {
    return <h1>{name}</h1>
});

console.log(newNames);


function BookList(){
    return (
        <section>
            
        </section>
    );
}

// to type to get your props : 
// 1 - const {title , author} = props;
// 2 - const Book = ({title,author}) => {
    
const Book = ({title,author}) => {
    // const {title , author} = props;
    return(
        <article>
            <img src="" alt="book image"/>
            <h2>{title}</h2>
            <h2>{author}</h2>
        </article>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);