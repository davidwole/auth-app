require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DB;


mongoose.connect(db).then(() => {
  app.listen(port, () => {
    console.log(`App is listening on Port ${port}`)
  });
}).catch((err) => {
  console.log({ error: err.message})
});

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method, req.ip);
  next();
})

app.get('/', (req, res) => {
  res.send('Hi');
});

app.use('/api/workouts', require('./workoutRoutes'));
