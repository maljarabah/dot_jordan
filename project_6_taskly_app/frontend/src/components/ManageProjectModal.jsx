import { useEffect, useState } from "react"
import axios from "axios"

// utils
import getLocalStorageData from "../utils/getLocalStorageData"

// components
import ErrorMessage from "./ErrorMessage"

function ManageProjectModal({ state, setState, isRefetch, setIsRefetch, projectData }) {
    const user = getLocalStorageData("user")
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        status: "",
    })

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleUpdate = async () => {
        setError(null)
        try {
            await axios.patch(import.meta.env.VITE_SERVER_URI + `/api/projects/${projectData._id}`, formData, { headers: { Authorization: `Bearer ${user.token}` } })
            setIsRefetch(!isRefetch)
            setError(null)
            setFormData({ name: "", description: "" })
            setState(false)
        } catch (err) {
            setError("please make sure you add all fields")
            console.log(err)
        }
    }

    const handleDelete = async () => {
        setError(null)
        if (confirm("Are you sure you want to delete this project?")) {
            const response = await axios.delete(import.meta.env.VITE_SERVER_URI + `/api/projects/${projectData._id}`, { headers: { Authorization: `Bearer ${user.token}` } })

            if (response) {
                setIsRefetch(!isRefetch)
                setState(false)
            }
        }
    }

    const handleDiscard = () => {
        setError(null)
        setState(false)
    }

    useEffect(() => {
        if (projectData) {
            setFormData({
                name: projectData.name,
                description: projectData.description,
                status: projectData.status,
            })
        }
    }, [state])

    return (
        <div className={`${!state ? "hidden" : ""}`}>
            <span className="fixed inset-0 h-full w-full bg-black opacity-40" onClick={handleDiscard}></span>
            <div className="fixed left-[50%] top-[50%] mx-auto w-full max-w-lg translate-x-[-50%] translate-y-[-50%] px-4">
                <div className="rounded-md bg-white shadow-lg">
                    <div className="flex items-center justify-between border-b p-4">
                        <p className="text-lg font-medium text-gray-800">Project Settings</p>
                        <button className="rounded-md p-2 text-gray-400 hover:bg-gray-100" onClick={handleDiscard}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="my-4 flex flex-col gap-3 px-4 text-[15.5px] leading-relaxed text-gray-500">
                        <div className="flex items-center gap-4">
                            <label htmlFor="name" className="min-w-32 font-semibold text-gray-600">
                                Project Name
                            </label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none focus:border-blue-600" required />
                        </div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="description" className="min-w-32 font-semibold text-gray-600">
                                Description
                            </label>
                            <input type="text" name="description" id="description" value={formData.description} onChange={handleChange} className="w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none focus:border-blue-600" required />
                        </div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="status" className="min-w-32 font-semibold text-gray-600">
                                Status
                            </label>
                            <select name="status" id="status" className="w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 outline-none focus:border-blue-600" value={formData.status} onChange={handleChange}>
                                <option value="active">Active</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <ErrorMessage message={error} />
                    </div>
                    <div className="flex items-center gap-3 border-t p-4">
                        <button className="rounded-md bg-blue-600 px-6 py-2 text-white outline-none ring-blue-600 ring-offset-2 focus:ring-2" onClick={handleUpdate}>
                            Update
                        </button>
                        <button className="rounded-md bg-red-600 px-6 py-2 text-white outline-none ring-red-600 ring-offset-2 focus:ring-2" onClick={handleDelete}>
                            Delete
                        </button>
                        <button className="rounded-md border px-6 py-2 text-gray-800 outline-none ring-blue-600 ring-offset-2 focus:ring-2" aria-label="Close" onClick={handleDiscard}>
                            Discard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageProjectModal
