import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},
    { collection: "courses" });
export default courseSchema;