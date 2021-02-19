
//   * Add exercises to the most recent workout plan.

//   * Add new exercises to a new workout plan.

//   * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//   * View the total duration of each workout from the past seven workouts on the `stats` page

// const app = require("express").app();
const Workout = require("../models/workout.js");

module.exports = function (app) {

    app.post("/api/workout", ({ body }, res) => {
        Workout.create(body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
}





