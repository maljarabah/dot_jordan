import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            setError(null)

            const response = await axios.post(import.meta.env.VITE_SERVER_URI + "/api/user/login", { email, password })

            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(response.data))

            setIsLoading(false)
            navigate("/")

            window.location.reload();

        } catch(err) {
            setIsLoading(false)
            setError(err.response.data.error)
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login
