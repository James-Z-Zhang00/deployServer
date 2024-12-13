import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import bodyParser from 'body-parser' // Make the server accept JSON

const app = express()
const PORT = 3000
dotenv.config()

app.use(bodyParser.json()) // Middleware to parse JSON

app.get("/test", (req,res) => {
    res.status(200).json({ message:"Hi I'm here" })
})

app.post("/create", (req,res) => {
    const newItem = req.body
    try {
        
    } catch (error) {
        
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log("Starting server at port", PORT)
})