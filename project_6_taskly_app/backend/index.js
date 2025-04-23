const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const projectRoutes = require("./routes/project")
const taskRoutes = require("./routes/task")
const userRoutes = require("./routes/user")

// dotenv
require("dotenv").config()

// express app
const app = express()

// cors
app.use(cors());

// json
app.use(express.json());

// root route
app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to Taskly API!"})
})

// routes
app.use("/api/auth", userRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/tasks", taskRoutes)

// database
async function connectDB() {
    try {
        // connect to database
        await mongoose.connect(process.env.MONGO_URI)

        // listen to port
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB and listening for requests on port.", process.env.PORT)
        })
    } catch (err) {
        console.log(err)
    }
}
connectDB()
