const express = require('express');
const router = express.Router();
const {
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
} = require('./workoutController');

router.get('/', getWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);


module.exports = router;