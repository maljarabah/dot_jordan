const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
        // possible values: 'active', 'completed'
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Project", projectSchema)
