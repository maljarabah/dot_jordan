import { useState } from "react"
import { MdDelete } from "react-icons/md";

function Item({ index, task, updateItem: checkItem, removeItem }) {

    return (
        <div className="item">
            <p className="name" style={{ textDecoration: task.isChecked ? "line-through" : "", color: task.isChecked ? "gray" : "black" }} onClick={() => checkItem(index)}>{task.name}</p>
            <button className="item_btn" type="button" onClick={() => removeItem(index)}> <MdDelete /> </button>
        </div>
    )
}

export default Item
