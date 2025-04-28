
import mongoose, { Schema } from "mongoose";

const projectSchama = new Schema({
    title: String,
    description: String,
    link: String,
    image: String,
    techs: [String]

})

export const projectModel = mongoose.models.Project || mongoose.model("Project", projectSchama);