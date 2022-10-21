const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  exercise: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('workouts', workoutSchema);