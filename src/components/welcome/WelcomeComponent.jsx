import { Link, useParams } from "react-router-dom";

function WelcomeComponent() {

    const {username} = useParams();

    return (
        <div className="welcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                <Link to="/todos">
                    <button className="btn btn-primary">Go to the To Do List</button>
                </Link>
            </div>
        </div>
    )

}

export default WelcomeComponent;