import React from "react"
import ReactDOM from "react-dom/client"

const firstBook = {
    title : 'El Jaiz wa ghair Ljaiz fi nikah L3ajaiz',
    author : 'mohamed ouallou',
}

const secondBook = {
    title : 'fuck Lwatan',
    author : 'Hokage 6',
}



function BookList(){
    return (
        <section>
            <Book title={firstBook.title} auth={firstBook.author}/>
            <Book title={secondBook.title} auth={secondBook.author}/>
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