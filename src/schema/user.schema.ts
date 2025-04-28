

import mongoose, { Schema } from "mongoose";

const userSchama = new  Schema({
    email:String,
    password:String
})

export  const userModel = mongoose.models.User || mongoose.model("User", userSchama);