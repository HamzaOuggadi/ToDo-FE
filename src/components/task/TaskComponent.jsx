import { useParams } from "react-router-dom";
import { getTasksByUserEmail } from "../../services/TaskService";
import { useEffect, useState } from "react";

export function TaskComponent() {

    const {userEmail} = useParams();

    const [tasks, setTasks] = useState([]);

    useEffect( () => getTasks(), [])

    function getTasks() {
        getTasksByUserEmail(userEmail)
            .then(response => {
                console.log(response.data);
                setTasks(response.data);
            })
            .catch(error => console.log(error))
            .finally();
    }

    return (
        <div className="container">
            <h1>Task Component :</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header text-bg-primary">Tasks :</div>
                        <div className="card-body">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {
                                        tasks.map(task => (
                                            <tr key={task.id}>
                                                <td>{task.id}</td>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>{task.status}</td>
                                                <td>{task.createdAt}</td>
                                                <td>{task.dueDate}</td>
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

export default TaskComponent;