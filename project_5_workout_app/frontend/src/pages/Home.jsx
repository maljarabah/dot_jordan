import { useEffect, useState } from "react"
import axios from "axios"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

function Home() {
    const [workouts, setWorkouts] = useState([])
    const [show, setShow] = useState(false)

    const user = JSON.parse(localStorage.getItem("user"))

    const fetchAllWorkouts = async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_SERVER_URI + "/api/workouts/",{
                headers: { "Authorization": `Bearer ${user.token}` },
            });
            setWorkouts(response.data)
        } catch (err) {
            console.log(`ERROR! ${err}`);
        }
    }

    useEffect(() => {
        if(user) {
            fetchAllWorkouts()
        }
    }, [show])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails key={workout._id} workout={workout} show={show} setShow={setShow} />
                ))}
            </div>
            <WorkoutForm show={show} setShow={setShow} />
        </div>
    )
}

export default Home
