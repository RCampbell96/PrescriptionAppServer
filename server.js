const express = require('express');
const mongoose = require('mongoose');
const Prescriptions = require('./routes/api/prescription')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

//BodyParser Middleware
app.use(express.json());

//DB config
const db = process.env.mongoURI
console.log(db)

//Connect to MongoDB
console.log(typeof process.env.mongoURI);

    mongoose.connect(db, { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('mongoose connection is successful on: ' + db);
        }
    });

//Use Routes
app.use('/api/prescription', Prescriptions);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));