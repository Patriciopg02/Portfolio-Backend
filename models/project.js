import mongoose from "mongoose";
import { Schema } from "mongoose";

const projectSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    database: {type: String, required: true},
    backend: {type: String, required: true},
    frontend: {type: String, required: true},
    github: {type: String, required: true},
    url: {type: String, required: true},
})

export default mongoose.model('Project', projectSchema);