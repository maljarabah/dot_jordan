const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")
const userRoutes = require("./routes/user")

// dotenv
require("dotenv").config()

// express app
const app = express()

// cors
app.use(cors());

// json
app.use(express.json());

// routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

// database
async function connectDB() {
    try {
        // connect to db
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
