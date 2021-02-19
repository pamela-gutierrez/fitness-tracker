
//   * Add exercises to the most recent workout plan.

//   * Add new exercises to a new workout plan.

//   * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//   * View the total duration of each workout from the past seven workouts on the `stats` page

// const app = require("express").app();
const Workout = require("../models/workout.js");

module.exports = function (app) {
    // getLastWorkout from api.js
    app.get("/api/workouts",
        Workout.find({})
            .then(dbWorkout => {
                // This is the response defined in api.js getLastWorkout. This is what is being served up to the client.
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            }),

        // addExercise() from api.js
        app.put("/api/workouts/:id",
            // Because we're doing the findOneAndUpdate function which automatically looks for ONE single id (or wahatever else), you can leave the curly brackets empty. If you were using just the .find then you would also need to include the id. 
            Workout.findOneAndUpdate({})
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.status(400).json(err);
                })
        ),

        // createWorkout() from api.js
        app.post("/api/workout", ({ body }, res) => {
            Workout.create(body)
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.status(400).json(err);
                });
        }),

        // getWorkoutsInRange() from api.js
        // CHANGE THIS TO BE ONLY FOR THE LAST SEVEN DAYS OF WORKOUTS. 
        app.get("/api/workouts/range",
            Workout.find({}).limit(7)
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
                .catch(err => {
                    res.status(400).json(err);
                })
        )
    )
};





