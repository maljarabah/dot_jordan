const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const workoutRoutes = require("./routes/workout")

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

// database
async function connectDB() {
    try {
        // connect to db
        await mongoose.connect(process.env.MONGO_URI)

        // listen to port
        app.listen(process.env.PORT, () => {
            console.log('connected to DB and listening for requests on port', process.env.PORT)
        })
    } catch (error) {
        console.log(error)
    }
}
connectDB()
