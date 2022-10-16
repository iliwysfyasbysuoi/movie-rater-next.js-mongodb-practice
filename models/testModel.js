
import mongoose, { Schema, model, models } from "mongoose";

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
})

const Test = models.Test || model('Test', testSchema);

export default Test;