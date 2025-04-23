import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router"

// utils
import setLocalStorageData from "../utils/setLocalStorageData"

// components
import Navbar from "../components/Navbar"
import ErrorMessage from "../components/ErrorMessage"

function Signup() {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [formData, setFormData] = useState({
        fullname: "",
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

            const response = await axios.post(import.meta.env.VITE_SERVER_URI + "/api/auth/signup", formData)

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
                            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">Sign up</h3>
                            <p className="">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                    Log in
                                </Link>
                            </p>
                        </div>
                    </div>
                    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="font-medium">Name</label>
                            <input type="text" name="fullname" className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-blue-600" required value={formData.fullname} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input type="email" name="email" className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-blue-600" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="font-medium">Password</label>
                            <input type="password" name="password" className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-blue-600" required value={formData.password} onChange={handleChange} />
                        </div>
                        <ErrorMessage message={error} />
                        <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white duration-150 hover:bg-blue-500 active:bg-blue-600">Create account</button>
                    </form>
                    <button className="mt-5 flex hidden w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 text-sm font-medium duration-150 hover:bg-gray-50 active:bg-gray-100">
                        <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup
