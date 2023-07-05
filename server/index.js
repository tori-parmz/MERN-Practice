// MERN = Mongo + Express + REact + Node

//Development = Node.js server + React server

// MEN

// E - Express

import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mern-stack-practice')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})