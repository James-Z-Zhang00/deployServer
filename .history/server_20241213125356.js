import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import bodyParser from 'body-parser' // Make the server accept JSON
import Schema from './schema.js'

const app = express()
const PORT = 3000
dotenv.config()

app.use(bodyParser.json()) // Middleware to parse JSON

app.get("/test", (req,res) => {
    res.status(200).json({ message:"Hi I'm here" })
})

app.get("/getAll", async (req,res) => {
    try {
        const items = await Schema.find({}) // Leave the parameter empty means to get all records
        res.status(200).json({ data: items })
    } catch (error) {
        res.status(500).json({ message: `error.message` })
    }
})

app.post("/create", async (req,res) => {
    const item = req.body
    const newItem = Schema(item)
    try {
        await newItem.save()
        res.status(200).json({ success:true, data: newItem })
    } catch (error) {
        res.status(500).json({ message: `error.message` })
    }
})

app.delete("/delete/:id", async (req,res) => {
    const { id } = req.params
    try {
        const deletingItem = await 
        await Schema.findByIdAndDelete(id)
        res.status(200).json({ success:true, data: newItem })
    } catch (error) {
        res.status(500).json({ message: `error.message` })
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log("Starting server at port", PORT)
})