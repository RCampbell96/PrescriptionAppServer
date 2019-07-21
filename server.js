const express = require('express');
const mongoose = require('mongoose');
const Prescriptions = require('./routes/api/prescription')
const app = express();

const PORT = process.env.PORT || 5000;

//BodyParser Middleware
app.use(express.json());

//DB config
const db = require('./keys').mongoURI

//Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/prescription', Prescriptions)

app.listen(PORT, () => console.log(`Server started on port:${PORT}`))