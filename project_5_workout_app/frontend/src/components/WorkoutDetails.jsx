import axios from "axios"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { MdDelete } from "react-icons/md";

function WorkoutDetails ({ workout, show, setShow }) {

    const handleClick = async () => {
        e.preventDefault()

        const user = JSON.parse(localStorage.getItem("user"))

        if(
            confirm("Are you sure you want to delete this item?")
        ) {
            const response = await axios.delete(import.meta.env.VITE_SERVER_URI + "/api/workouts/" + workout._id, {
                headers: { "Authorization": `Bearer ${user.token}` },
            })

            if(response) {
                setShow(!show)
            }
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(workout.createdAt, { addSuffix: true })}</p>
            <span><MdDelete onClick={handleClick} /></span>
        </div>
    )
}

export default WorkoutDetails
