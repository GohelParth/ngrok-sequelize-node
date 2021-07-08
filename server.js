const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Router = require('./src/Routes/routes.js');
// const task = require('./cronJob');

// task.start();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/base/api/', Router);

app.listen(PORT, () => {
    console.log(`server created at ${PORT}!`);
})