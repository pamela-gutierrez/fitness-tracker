
const API = {
  // async indicates that the getLastWorkout function 
  async getLastWorkout() {
    let res;
    // try statement lets you test a of block for code for errors
    try {
      // This is grabbing the response from the API routes, speficially the app.get with the same route name. Line below is saying go get the response from the backend.
      res = await fetch("/api/workouts");
    } catch (err) {
      // you need the try and await and catch because it makes the function wait for the results to come back from the server aka api-routes. Without this, there would be an error in the console log right away. The function still works without the catch but the catch allows your to read the error in the console log (when coupled with a console log)
      console.log(err)
    }
    // This is just creating a variable for line 9 to hold the information so you can use it later on line 17. 
    const json = await res.json();
    // This means return json at the index of 4 (assuming the length is 5). The minus 1 just means it only wants the last index. In this case it would be to get the last exercise.
    return json[json.length - 1];
  },

  // Look first for the method, in this case it's put which means it's an update because you're adding a new exercise to workout (array) that already exists.
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
