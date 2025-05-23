const Workout = require("../models/workoutModel")
const mongoose = require("mongoose")

// get all workouts
async function getAllWorkouts (req, res) {
    const user_id = req.user._id
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

// get a single workout
async function getWorkout (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }

    res.status(200).json(workout)
}

// create a new workout
async function createWorkout (req, res) {
    const user_id = req.user._id
    const { title, load, reps } = req.body

    console.log(title, load, reps)

    // add to the database
    try {
        const workout = await Workout.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete a workout
async function deleteWorkout (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout" })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: "No such workout" })
    }

    res.status(200).json(workout)
}

// update a workout
async function updateWorkout (req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout" })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({ error: "No such workout" })
    }

    res.status(200).json(workout)
}

module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
