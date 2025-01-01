import { useEffect, useState } from "react"
import { MdOutlineAddCircle } from "react-icons/md";
import Item from "./Item"

function App() {

    const [tasks, setTasks] = useState(localStorage.tasks ? JSON.parse(localStorage.tasks) : [])
    const [newValue, setNewValue] = useState("")

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    function updateNewValue(event) {
        setNewValue(event.target.value)
    }

    function addItem() {
        if (newValue) {

            const newTask = {
                name: newValue,
                isChecked: false
            }

            setTasks([...tasks, newTask])
            setNewValue("")
        }
    }

    function addItemEvent(event) {
        if (event.key === "Enter" && newValue)
            addItem()
    }

    function checkItem(index) {
        setTasks(tasks.map(
            (task, i) => i === index ? { name: task.name, isChecked: !task.isChecked } : task
        ))
    }

    function removeItem(index) {
        setTasks(tasks.filter(
            (_, i) => i != index)
        )
    }

    return (
        <div className="main">
            <h1 className="title">
                TODO List { tasks.length ? `(${tasks.filter(t=>t.isChecked).length}/${tasks.length})` : ""}
            </h1>
            <div className="newTask">
                <input type="text" placeholder="Write your next task.." value={newValue} onChange={updateNewValue} onKeyDown={addItemEvent} />
                <button type="button" onClick={addItem}> <MdOutlineAddCircle /> </button>
            </div>
            <ul className="items">
                {tasks.map((item, i) => <Item key={i} index={i} task={item} updateItem={checkItem} removeItem={removeItem} />)}
            </ul>
        </div>
    )
}

export default App
