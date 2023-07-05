// MERN = Mongo + Express + REact + Node

//Development = Node.js server + React server

// MEN

// E - Express

import express from 'express';
const app = express();
import cors from 'cors';

app.use(cors())

app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok '})
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})