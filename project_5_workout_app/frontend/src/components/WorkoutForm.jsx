import { useState } from "react"
import axios from "axios"

function WorkoutForm ({ show, setShow }) {
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = JSON.parse(localStorage.getItem("user"))

        try {
            await axios.post(import.meta.env.VITE_SERVER_URI + "/api/workouts", { title, load, reps }, {
                headers: { "Authorization": `Bearer ${user.token}` },
            });
            setShow(!show); setError(null); setTitle(""); setLoad(""); setReps("")
            console.log("new workout added:")
        } catch (error) {
            setError("please make sure you add all fields")
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm
