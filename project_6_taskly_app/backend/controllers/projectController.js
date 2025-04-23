const mongoose = require("mongoose")
const Project = require("../models/projectModel")

// get all projects
async function getAllProjects (req, res) {
    const userId = req.user._id
    const projects = await Project.find({ userId }).sort({ createdAt: -1 })
    res.status(200).json(projects)
}

// get a single project
async function getProject (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid project ID" })
    }

    const project = await Project.findById(id)

    if (!project) {
        return res.status(404).json({ error: "No such project" })
    }

    res.status(200).json(project)
}

// create a new project
async function createProject (req, res) {
    const userId = req.user._id
    const { name, description } = req.body

    // add to the database
    try {
        const project = await Project.create({ name, description, status: "active", userId })
        res.status(200).json(project)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete a project
async function deleteProject (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid project ID" })
    }

    const project = await Project.findOneAndDelete({ _id: id })

    if (!project) {
        return res.status(400).json({ error: "No such project" })
    }

    res.status(200).json(project)
}

// update a project
async function updateProject (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid project ID" })
    }

    const project = await Project.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!project) {
        return res.status(400).json({ error: "No such project" })
    }

    res.status(200).json(project)
}

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}
