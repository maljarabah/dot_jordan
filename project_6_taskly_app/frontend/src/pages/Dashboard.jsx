import { useState, useEffect } from "react"
import { Link } from "react-router"
import axios from "axios"

// utils
import getLocalStorageData from "../utils/getLocalStorageData"
import formatDate from "../utils/formatDate.js"
import trimText from "../utils/trimText.js"

// components
import Sidebar from "../components/Sidebar"
import AddProjectModal from "../components/AddProjectModal"
import ManageProjectModal from "../components/ManageProjectModal"

function Dashboard() {
    const user = getLocalStorageData("user")
    const [projects, setProjects] = useState([])
    const [isRefetch, setIsRefetch] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [addModalState, setAddModalState] = useState(false)
    const [manageModalState, setManageModalState] = useState(false)
    const [projectIdx, setProjectIdx] = useState(null)

    const fetchAllProjects = async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_SERVER_URI + "/api/projects/", {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            setProjects(response.data)
        } catch (err) {
            console.log(`ERROR! ${err}`)
        }
    }

    const handleCreate = () => {
        setAddModalState(true)
    }

    const handleManage = (e) => {
        setProjectIdx(e.target.getAttribute("data-idx"))
        setManageModalState(true)
    }

    useEffect(() => {
        if (user) {
            setIsLoading(true)
            fetchAllProjects()
            setIsLoading(false)
        }
    }, [isRefetch])

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-8">
                    <div className="items-start justify-between md:flex">
                        <div className="max-w-lg">
                            <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">All Projects</h3>
                            <p className="mt-2 text-gray-600">Browse and manage all your projects in one place.</p>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <button className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white duration-150 hover:bg-blue-500 active:bg-blue-700 md:text-sm" onClick={handleCreate}>
                                Add Project
                            </button>
                        </div>
                    </div>
                    <div className={`p-20 ${!isLoading || projects.length != 0 ? "hidden" : ""}`}>Empty!</div>
                    <div className={`relative mt-12 h-max overflow-auto ${isLoading && projects.length == 0 ? "hidden" : ""}`}>
                        <table className="w-full table-auto text-left text-sm">
                            <thead className="border-b font-medium text-gray-600">
                                <tr>
                                    <th className="py-3 pr-6">Date Created</th>
                                    <th className="py-3 pr-6">Project Name</th>
                                    <th className="py-3 pr-6">Description</th>
                                    <th className="py-3 pr-6">Current Status</th>
                                    <th className="py-3 pr-6">Actions</th>
                                    <th className="py-3 pr-6"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y text-gray-600">
                                {projects.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="whitespace-nowrap py-4 pr-6">{formatDate(item.createdAt)}</td>
                                        <td className="whitespace-nowrap py-4 pr-6">{item.name}</td>
                                        <td className="whitespace-nowrap py-4 pr-6" title={item.description}>
                                            {trimText(item.description)}
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-6">
                                            <span className={`rounded-full px-3 py-2 text-xs font-semibold ${item.status == "active" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}>{item.status}</span>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-6">
                                            <Link to={`/project/${item._id}`} className="font-medium text-blue-600 hover:text-blue-500">
                                                Tasks →
                                            </Link>
                                        </td>
                                        <td className="whitespace-nowrap text-right">
                                            <button className="rounded-lg border px-3 py-1.5 text-gray-600 duration-150 hover:bg-gray-50 hover:text-gray-500" data-idx={idx} onClick={handleManage}>
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddProjectModal state={addModalState} setState={setAddModalState} isRefetch={isRefetch} setIsRefetch={setIsRefetch} />
            <ManageProjectModal state={manageModalState} setState={setManageModalState} isRefetch={isRefetch} setIsRefetch={setIsRefetch} projectData={projects[projectIdx]} />
        </div>
    )
}

export default Dashboard
