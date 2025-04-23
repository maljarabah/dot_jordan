const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            // possible values: 'todo', 'in_progress', 'done'
        },
        priority: {
            type: String,
            required: true,
            // possible values: 'low', 'medium', 'high'
        },
        dueDate: {
            type: Date,
            required: true,
        },
        projectId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
