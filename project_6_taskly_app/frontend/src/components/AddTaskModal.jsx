import { useState } from "react"
import axios from "axios"

// utils
import getLocalStorageData from "../utils/getLocalStorageData"

// components
import ErrorMessage from "../components/ErrorMessage"

function AddTaskModal({ state, setState, isRefetch, setIsRefetch, projectId }) {
    const user = getLocalStorageData("user")
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        dueDate: "",
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCreate = async () => {
        setError(null)
        try {
            await axios.post(import.meta.env.VITE_SERVER_URI + "/api/tasks", { ...formData, projectId }, { headers: { Authorization: `Bearer ${user.token}` } })
            setIsRefetch(!isRefetch)
            setError(null)
            setFormData({ name: "", description: "", dueDate: "" })
            setState(false)
        } catch (err) {
            setError("please make sure you add all fields")
            console.log(err)
        }
    }

    const handleClose = () => {
        setFormData({ name: "", description: "", dueDate: "" })
        setError(null)
        setState(false)
    }

    return (
        <div className={`${!state ? "hidden" : ""}`}>
            <span className="fixed inset-0 h-full w-full bg-black opacity-40" onClick={handleClose}></span>
            <div className="fixed left-[50%] top-[50%] mx-auto w-full max-w-lg translate-x-[-50%] translate-y-[-50%] px-4">
                <div className="rounded-md bg-white shadow-lg">
                    <div className="flex items-center justify-between border-b p-4">
                        <p className="text-lg font-medium text-gray-800">Create a new task</p>
                        <button className="rounded-md p-2 text-gray-400 hover:bg-gray-100" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="my-4 flex flex-col gap-3 px-4 text-[15.5px] leading-relaxed text-gray-500">
                        <div className="flex items-center gap-4">
                            <label htmlFor="name" className="min-w-32 font-semibold text-gray-600">
                                Task Name
                            </label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Enter name" className="w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none focus:border-blue-600" required />
                        </div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="description" className="min-w-32 font-semibold text-gray-600">
                                Description
                            </label>
                            <input type="text" name="description" id="description" value={formData.description} onChange={handleChange} placeholder="Enter description" className="w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none focus:border-blue-600" required />
                        </div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="dueDate" className="min-w-32 font-semibold text-gray-600">
                                Due Date
                            </label>
                            <input type="date" name="dueDate" id="dueDate" value={formData.dueDate} onChange={handleChange} placeholder="Select due date" className="w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none focus:border-blue-600" required />
                        </div>
                        <ErrorMessage message={error} />
                    </div>
                    <div className="flex items-center gap-3 border-t p-4">
                        <button className="rounded-md bg-blue-600 px-6 py-2 text-white outline-none ring-blue-600 ring-offset-2 focus:ring-2" onClick={handleCreate}>
                            Create
                        </button>
                        <button className="rounded-md border px-6 py-2 text-gray-800 outline-none ring-blue-600 ring-offset-2 focus:ring-2" aria-label="Close" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal
