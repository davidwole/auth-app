const Workout = require('./workoutModel');

const getWorkout = async (req, res) => {
  const workouts = await Workout.find();
  
  res.json(workouts); 
}

const createWorkout = async (req, res) => {
  
  if(!req.body){
    res.send('Enter the Body');
  }
  
  const newWorkout = await Workout.create(req.body);
  
  res.json(newWorkout);
}

const  updateWorkout = async (req, res) => {
  const patchedWorkout = await Workout.findyByIdAndUpdate(req.params.id, req.body);
  
  res.json(patchedWorkout);
  
  
}

const  deleteWorkout = async (req, res) => {
  const deletedWorkout = await findByIdAndDelete(req.params.id);
  
  res.send(`${req.params.id} is deleted`);
}

module.exports = {
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}