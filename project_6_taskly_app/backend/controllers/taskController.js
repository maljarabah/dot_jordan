const mongoose = require("mongoose")
const Task = require("../models/taskModel")

// get all tasks
async function getAllTasks (req, res) {
    const { projectId } = req.query

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(400).json({ error: "Invalid project ID." })
    }
    const tasks = await Task.find({ projectId }).sort({ createdAt: -1 })

    if (!tasks || tasks.length === 0) {
        return res.status(404).json({ error: "No tasks found for this project" })
    }

    res.status(200).json(tasks)
}

// get a single task
async function getTask (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid task ID" })
    }

    const task = await Task.findById(id)

    if (!task) {
        return res.status(404).json({ error: "No such task" })
    }

    res.status(200).json(task)
}

// create a new task
async function createTask (req, res) {
    const { name, description, dueDate, projectId } = req.body

    // add to the database
    try {
        const task = await Task.create({
            name,
            description,
            status: "todo",
            priority: "low",
            dueDate,
            projectId
        })
        res.status(200).json(task)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete a task
async function deleteTask (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid task ID" })
    }

    const task = await Task.findOneAndDelete({ _id: id })

    if (!task) {
        return res.status(400).json({ error: "No such task" })
    }

    res.status(200).json(task)
}

// update a task
async function updateTask (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid task ID" })
    }

    const task = await Task.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!task) {
        return res.status(400).json({ error: "No such task" })
    }

    res.status(200).json(task)
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}
