import express from 'express'

const app = express()
const PORT = 3000

app.get("/test", (req,res) => {
    res.status(200).json({ message:"Hi I'm here" })
})

app.listen(PORT, () => {
    console.log("Starting server at port", PORT)
})