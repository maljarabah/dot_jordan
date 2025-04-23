const express = require("express")
const requireAuth = require("../middleware/requireAuth")

// controller functions
const {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require("../controllers/taskController")

const router = express.Router()

// require auth for all task routes
router.use(requireAuth)

// GET all tasks
router.get("/", getAllTasks)

// GET a single task
router.get("/:id", getTask)

// POST a new task
router.post("/", createTask)

// DELETE a task
router.delete("/:id", deleteTask)

// UPDATE a task
router.patch("/:id",updateTask)

module.exports = router
