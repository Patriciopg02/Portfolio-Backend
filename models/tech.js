import mongoose from "mongoose";
import { Schema } from "mongoose";

const techSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},    
})

export default mongoose.model('Tech', techSchema);