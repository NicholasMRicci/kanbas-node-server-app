import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: String,
        ref: "courses",
        required: true
    },
    lessons: {
        type: Array,
        required: true
    }
},
    { collection: "modules" });
export default modulesSchema;