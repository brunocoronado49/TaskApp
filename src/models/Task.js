import { Schema, model } from 'mongoose' // Schema: data, Model: name

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, { 
    timestamps: true,
    versionKey: false,
})

export default model('Task', TaskSchema)
