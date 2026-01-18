import React from "react";
import Todo from "./components/Todo";

const App = () => {
    return (
      <>
          <h2 className="text-3xl font-bold text-center mt-10">Manage Your Tasks</h2>
          <div className="w-full max-w-md mx-auto h-md p-6 border rounded-2xl mt-10 flex flex-col items-center justify-center bg-gray-100">
            <Todo/>
          </div>
      </>
    );
};

export default App;
