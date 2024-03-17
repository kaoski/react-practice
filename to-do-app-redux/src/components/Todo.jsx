/* eslint-disable react/prop-types */
const Todo = ({todo}) => {
    return (
        <li className="bg-blue-50 border-2 p-2 m-2 rounded-sm">
            <span>{todo.title}</span>
        </li>
    );
};

export default Todo;

