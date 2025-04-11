import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.removeItem("user")
        navigate("/")
        window.location.reload();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
