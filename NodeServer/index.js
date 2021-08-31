const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

const userRoutes = require('./Routes/users');
const authRoutes = require('./Routes/auth');
const postRoutes = require('./Routes/posts')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, ()=>{
    console.log("MongoDB Connected...");
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Routes
app.get("/", (req, res)=>{
    res.send("WORKING THERE !!");
});
app.get("/users", (req, res)=>{
    res.send("USERS HERE !!");
});

app.listen(8800, ()=>{
    console.log("Working...");
});