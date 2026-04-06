const express = require('express');
const multer = require('multer');
const cors = require('cors');
const authRoutes = require('./routes/users.route');

const app = express();


app.use(express.json());
app.use(cors());

//Routes
app.use('/api/auth', authRoutes);

module.exports = app;