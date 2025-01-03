import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true, // Automatically add createdAt and updatedAt time
    strict: false // Allow new data field be created if the JSON doesn't have one
})

const Schema = mongoose.model('Host', schema)
// The 2nd Test is the collection name

export default Schema // Export the schema named Test for future use