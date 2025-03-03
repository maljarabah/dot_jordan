import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import axios from 'axios'
import { MdDelete } from "react-icons/md";

function WorkoutDetails ({ workout, show, setShow }) {
    const handleClick = async () => {
        if(confirm("Are you sure you want to delete this item?")) {
            const response = await axios.delete(import.meta.env.VITE_SERVER_URI + '/api/workouts/' + workout._id)
            response ? setShow(!show) : _
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(workout.createdAt, { addSuffix: true })}</p>
            <span><MdDelete onClick={handleClick} style={{ fontSize: '20px', color: 'red' }} /></span>
        </div>
    )
}
export default WorkoutDetails
