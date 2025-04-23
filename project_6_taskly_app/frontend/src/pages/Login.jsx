import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router"

// utils
import setLocalStorageData from "../utils/setLocalStorageData"

// components
import Navbar from "../components/Navbar"
import ErrorMessage from "../components/ErrorMessage"

function Login() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            setError(null)

            const response = await axios.post(import.meta.env.VITE_SERVER_URI + "/api/auth/login", formData)

            setLocalStorageData("user", response.data)
            setIsLoading(false)
            navigate("/")

            window.location.reload()
        } catch (err) {
            setIsLoading(false)
            setError(err.response.data.error)
        }
    }

    return (
        <div className="flex h-screen flex-col">
            <Navbar />
            <div className="flex h-full flex-col items-center justify-center px-4">
                <div className="-mt-12 w-full max-w-sm text-gray-600">
                    <div className="text-center">
                        <div className="mt-5 space-y-2">
                            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Log in to your account</h3>
                            <p className="">
                                Don't have an account?{" "}
                                <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="font-medium">Email</label>
                            <input type="email" name="email" className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-blue-600" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="font-medium">Password</label>
                            <input type="password" name="password" className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-blue-600" required value={formData.password} onChange={handleChange} />
                        </div>
                        <ErrorMessage message={error} />
                        <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white duration-150 hover:bg-blue-500 active:bg-blue-600">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
