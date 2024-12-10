import { useState } from 'react';

function NewTodoList() {
    const [state, setState] = useState([]);

    function addInputHandler(e) {
        const newState = e.target.value.trim();
        if (newState.length > 0) {
            setState([...state, { text: newState, done: false }]);
        }
        e.target.value = ""; // Clear input field
    }

    function toggleDone(index) {
        const updatedState = state.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        );
        setState(updatedState);
    }

    return (
        <>
            <h1>My First ToDo App</h1>
            <label htmlFor="task-input">
                Type your task:
                <input
                    type="text"
                    id="task-input"
                    onBlur={addInputHandler}
                    placeholder="Write here"
                />
                <button>Add</button>
            </label>
            <ul>
                {state.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            listStyleType: "number",
                            textDecoration: task.done ? "line-through" : "none",
                        }}
                    >
                        {task.text}{" "}
                        <button onClick={() => toggleDone(index)}>Done</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NewTodoList;