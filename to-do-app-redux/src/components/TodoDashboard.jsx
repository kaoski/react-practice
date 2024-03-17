import {useSelector, useDispatch} from "react-redux";
import Todo from "./Todo";
import { useState } from "react";
import { addTodo } from "../store/todoSlice";
import { generateNewTask } from "../utils/utils";

const TodoDashboard = () => {
    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo);
    console.log(todos);

    function handleAddTask () {
        dispatch(addTodo(generateNewTask(newTask)))
        setNewTask("");
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-50 overflow-auto">
            <div className="mt-16">
                <input placeholder="Add New Task" className="p-2 m-2 rounded-sm" value={newTask} onChange={ev => setNewTask(ev.target.value)} type="text"/>
                <button className="bg-blue-200 p-2 m-2 rounded-sm" onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}/>)
                }
            </ul>
        </div>

    );
};

export default TodoDashboard;