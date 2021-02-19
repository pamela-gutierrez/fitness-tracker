const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// This is the schema that determines the requirements necessary for a new workout.
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            require: "Type is required"
        },
        name: {
            type: String,
            trim: true,
            require: "Name is required"
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;