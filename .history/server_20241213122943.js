import express from 'express'
import bodyParser from 'body-parser' // Make the server accept JSON


const app = express()
const PORT = 3000

app.use(bodyParser.json()) // Middleware to parse JSON

app.get("/test", (req,res) => {
    res.status(200).json({ message:"Hi I'm here" })
})

app.listen(PORT, () => {
    console.log("Starting server at port", PORT)
})