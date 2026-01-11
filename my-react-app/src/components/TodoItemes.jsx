import React from "react";
import { Trash } from "lucide-react";

const TodoItemes = (props) => {
    const { id, text, state , deleteTask} = props;
    return (
        <>
            <div className="grid grid-cols-4 gap-2 space-y-2 w-full ">
                <label
                    htmlFor="hs-vertical-radio-in-form"
                    className="col-span-3 max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <input
                        type="radio"
                        name="hs-vertical-radio-in-form"
                        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-vertical-radio-in-form"
                    />
                    <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                        {text}
                    </span>
                </label>
                <button
                    onClick={() => {deleteTask(id)}}
                    type="button"
                    className="col-span-1 w-full py-3 px-4 flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    <Trash className="size-4.5" />
                </button>
            </div>
        </>
    );
};

export default TodoItemes;
