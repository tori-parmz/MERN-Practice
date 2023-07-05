// MERN = Mongo + Express + REact + Node

//Development = Node.js server + React server

// MEN

// E - Express

import express from 'express'
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(1337, () => {
    console.log('Server started on 1337')
})