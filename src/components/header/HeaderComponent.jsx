import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/security/AuthContext";

function HeaderComponent() {

    const authContext = useAuthContext();

    function onLogout() {
        authContext.logout();
    }

    return (

        <nav className="navbar navbar-dark navbar-expand-lg bg-primary mb-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i className="bi bi-clipboard-check h3 me-2"> ToDo</i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/todos">Todo List</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/tasks">Tasks</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
                {
                    authContext.isAuthenticated ? 
                    <li className="nav-item">
                        <Link to="/login" className="nav-link active" onClick={onLogout}>Logout</Link>
                    </li>
                    :
                    <li className="nav-item">
                        <Link to="/login" className="nav-link active">Login</Link>
                    </li>
                }
            </ul>
            </div>
        </div>
        </nav>

    )

}

export default HeaderComponent;