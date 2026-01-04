import React from "react";
import ReactDOM from "react-dom/client";
import {Books} from "./Book"

// const firstBook = {
//     title : 'El Jaiz wa ghair Ljaiz fi nikah L3ajaiz',
//     author : 'mohamed ouallou',
// }

// const secondBook = {
//     title : 'fuck Lwatan',
//     author : 'Hokage 6',
// }



//! Example ==========
// const Names = ["Salah", "Mohamed", "Amine"];
// const newNames = Names.map((name) => {
//   return <h1>{name}</h1>;
// });

// console.log(newNames);
//!====================

// function BookList(){
//     return (
//         <section>
//             {Names.map((name) => {
//                 return <h1>{name}</h1>
//             })}
//         </section>
//     );
// }

//* the code above explain that react can't rander a object
//* the soluction is maping the object

function BookList() {
    function getBook(id) {
        const result = Books.find((book) => book.id === id);
        console.log(result);
    }

    return (
        <section>
            {/* <ExampleEvent /> */}
            {Books.map((book,index) => {
                // const {title,author,id} = book;
                // or book.title                
                return <Book key={book.id} num={index} getBook={getBook} {...book} />;
            })}
        </section>
    );
}

// const ExampleEvent = () => {
//     const handelInput = () => {
//         console.log("input chnaged");
//     };
//     // const handelButton = () => {
//     //     alert("button clicked just now");
//     // };
//     return (
//         <section>
//             <form action="">
//                 <input type="text" name="example" onChange={handelInput} />
//             </form>
//             <button
//                 onClick={() => {
//                     alert("button clicked just now");
//                 }}>
//                 click me
//             </button>
//         </section>
//     );
// };

// to type to get your props :
// 1 - const {title , author} = props;
// 2 - const Book = ({title,author}) => {

//! Book component
const Book = (props) => {
    const { id, title, author, getBook ,num} = props;
    // const getsinglbook = () => {
    //     getBook(id);
    // };
    return (
        <article>
            <img src="null" alt="book image" />
            <h2>{title}</h2>
            <h2>{author}</h2>
            <h2>{num+1}</h2>
            <button onClick={() => {getBook(id)}}>getBook</button>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
