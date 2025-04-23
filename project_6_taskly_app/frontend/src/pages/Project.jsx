import { useState, useEffect } from "react"
import { Link, useParams } from "react-router"
import axios from "axios"

// utils
import getLocalStorageData from "../utils/getLocalStorageData"
import formatDate from "../utils/formatDate.js"
import trimText from "../utils/trimText.js"
import snakeToTitle from "../utils/snakeToTitle.js"

// components
import Sidebar from "../components/Sidebar"
import AddTaskModal from "../components/AddTaskModal"
import ManageTaskModal from "../components/ManageTaskModal"

function Project() {
    const user = getLocalStorageData("user")
    const params = useParams()
    const projectId = params.projectId

    const [projectData, setProjectData] = useState({})
    const [tasks, setTasks] = useState([])
    const [isRefetch, setIsRefetch] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [addModalState, setAddModalState] = useState(false)
    const [manageModalState, setManageModalState] = useState(false)
    const [taskIdx, setTaskIdx] = useState(null)

    const fetchCurrentProject = async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_SERVER_URI + `/api/projects/${projectId}`, {
                headers: { Authorization: `Bearer ${user.token}` },
            })
            setProjectData(response.data)
        } catch (err) {
            console.log(`ERROR! ${err}`)
        }
    }

    const fetchAllTasks = async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_SERVER_URI + "/api/tasks", {
                headers: { Authorization: `Bearer ${user.token}` },
                params: { projectId },
            })
            setTasks(response.data)
        } catch (err) {
            console.log(`ERROR! ${err}`)
        }
    }

    const handleCreateClick = () => {
        setAddModalState(true)
    }

    const handleManageClick = (e) => {
        setTaskIdx(e.target.getAttribute("data-idx"))
        setManageModalState(true)
    }

    useEffect(() => {
        setIsLoading(true)
        fetchCurrentProject()
        setIsLoading(false)
    }, [])

    useEffect(() => {
        if (user) {
            setIsLoading(true)
            fetchAllTasks()
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
                            <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">Project: {projectData.name || ""}</h3>
                            <p className="mt-2 text-gray-600" title={projectData.description}>
                                {trimText(projectData.description || "", 130)}
                            </p>
                        </div>
                        <div className="mt-3 md:mt-0">
                            <button className="inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white duration-150 hover:bg-blue-500 active:bg-blue-700 md:text-sm" onClick={handleCreateClick}>
                                Add Task
                            </button>
                        </div>
                    </div>
                    <div className={`p-20 ${!isLoading || tasks.length != 0 ? "hidden" : ""}`}>Empty!</div>
                    <div className={`relative mt-12 h-max overflow-auto ${isLoading && tasks.length == 0 ? "hidden" : ""}`}>
                        <table className="w-full table-auto text-left text-sm">
                            <thead className="border-b font-medium text-gray-600">
                                <tr>
                                    <th className="py-3 pr-6">Task Name</th>
                                    <th className="py-3 pr-6">Description</th>
                                    <th className="py-3 pr-6">Due Date</th>
                                    <th className="py-3 pr-6">Current Status</th>
                                    <th className="py-3 pr-6">Priority</th>
                                    <th className="py-3 pr-6"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y text-gray-600">
                                {tasks.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="whitespace-nowrap py-4 pr-6">{item.name}</td>
                                        <td className="whitespace-nowrap py-4 pr-6" title={item.description}>
                                            {trimText(item.description)}
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-6">{formatDate(item.dueDate)}</td>
                                        <td className="whitespace-nowrap py-4 pr-6">
                                            <span className={`rounded-full px-3 py-2 text-xs font-semibold ${item.status == "todo" ? "bg-blue-50 text-blue-600" : item.status == "in_progress" ? "bg-yellow-50 text-yellow-600" : "bg-green-50 text-green-600"}`}>{snakeToTitle(item.status)}</span>
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-6">
                                            <span className={`rounded-full px-3 py-2 text-xs font-semibold ${item.priority == "low" ? "bg-green-50 text-green-700" : item.priority == "medium" ? "bg-orange-50 text-yellow-600" : "bg-red-50 text-red-600"}`}>{snakeToTitle(item.priority)}</span>
                                        </td>
                                        <td className="whitespace-nowrap text-right">
                                            <button className="rounded-lg border px-3 py-1.5 text-gray-600 duration-150 hover:bg-gray-50 hover:text-gray-500" data-idx={idx} onClick={handleManageClick}>
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
            <AddTaskModal state={addModalState} setState={setAddModalState} isRefetch={isRefetch} setIsRefetch={setIsRefetch} projectId={projectId} />
            <ManageTaskModal state={manageModalState} setState={setManageModalState} isRefetch={isRefetch} setIsRefetch={setIsRefetch} taskData={tasks[taskIdx]} />
        </div>
    )
}

export default Project
