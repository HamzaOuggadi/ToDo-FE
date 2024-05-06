import { useEffect, useState } from "react";
import { getTodoListByUser } from "../../services/ToDoService";
import { useNavigate } from "react-router-dom";

function TodoListComponent() {

    /* const todos = [
        {
            id : 1,
            title : "Learn React",
            description : "Learn React from Udemy",
            date : new Date(),
            status : "DONE"
        },
        {
            id : 2,
            title : "Learn DevOps",
            description : "Learn DevOps from Udemy",
            date : new Date(),
            status : "DONE"
        },
        {
            id : 3,
            title : "Learn Cloud",
            description : "Learn Cloud from Udemy",
            date : new Date(),
            status : "DONE"
        },
        {
            id : 4,
            title : "Learn Angular",
            description : "Learn Angular from Udemy",
            date : new Date(),
            status : "DONE"
        },
        {
            id : 5,
            title : "Learn Game Dev",
            description : "Learn Game Dev from Udemy",
            date : new Date(),
            status : "DONE"
        },
        {
            id : 6,
            title : "Learn OpenGL",
            description : "Learn OpenGL from Udemy",
            date : new Date(),
            status : "DONE"
        }
    ] */

    const navigate = useNavigate();

    const [todos, setTodos] = useState([])

    useEffect( () => getTodosbyUser(), [])

    function getTodosbyUser() {
        getTodoListByUser("hamza@email.com")
            .then( response =>
                {
                    setTodos(response.data)
                }
            )
            .catch(error => console.log(error))
            .finally();
    }

    function goToTasksByUserEmail() {
        navigate(`/tasks/${"hamza@email.com"}`);
    }

    

    return (
        <div className="container">
            <h1>To Do List Component</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header text-bg-primary">To Do List :</div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Owner</th>
                                        <th>Number of Tasks</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {
                                        todos.map(todo => (
                                            <tr key={todo.id}>
                                                <td>{todo.id}</td>
                                                <td>{todo.name}</td>
                                                <td>{todo.userEmail}</td>
                                                <td>{todo.taskDTOS.length}</td>
                                                <td>{todo.status}</td>
                                                <td>
                                                    <button className="btn btn-primary me-1" onClick={goToTasksByUserEmail}>Tasks</button>
                                                    <button className="btn btn-danger me-1">Delete</button>
                                                    <button className="btn btn-info">Edit</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TodoListComponent;