import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },  //to not set same email id that why used unique:true
    password: { type: String, required: true },
    cartData:{type:Object,default:{}}
}, { minimize: false })

const userModel = mongoose.models.user || mongoose.model("user", userSchema);   //or opertaor = ||
export default userModel;