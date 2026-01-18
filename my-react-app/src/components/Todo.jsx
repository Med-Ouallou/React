import React, { useRef, useState } from "react";
import TodoItemes from "./TodoItemes";

const Todo = () => {
    const [task, setTask] = useState([]);
    const inputRef = useRef();
    // ! ADD function--------------------------------
    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        } else {
        }

        const newTask = {
            id: Date.now(),
            text: inputText,
            status: false,
        };
        setTask((prev) => [...prev, newTask]);
        inputRef.current.value = "";
    };
    // ! end logic ----------------------------
    
    // * Delete function ----------------------
    const deleteTask = (id) => {
        let newArray = task.filter((task) => task.id !== id);
        return setTask(newArray);
    };
    // * end logic ----------------------------

    return (
        <>
            <div>
                <div className="max-w-sm space-y-3 flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        className="py-2.5 sm:py-3 px-5 block w-sm border-gray-200 rounded-full sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        placeholder="Add Your Task"
                    />
                    <button
                        onClick={add}
                        type="button"
                        className="py-3 mb-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Button
                    </button>
                </div>
            </div>

            {/*------------- Items list ---------------*/}

            <div className="w-sm mt-13 flex flex-col items-center justify-center gap-4">
                {task.map((task) => {
                    const { id, text, status } = task;
                    return <TodoItemes key={id} id={id} text={text} deleteTask={deleteTask} />;
                })}
            </div>
        </>
    );
};

export default Todo;
