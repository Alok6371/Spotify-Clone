import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    fullname: {
        typeof: String,
        required: true
    },
    imageURL: {
        typeof: String,
        required: true,
        unique: true
    },
    clerkId: {
        typeof: String,
        required: true,
        unique: true
    }
}, { timestamps: true });
//CreatedAt and UpdatedAt
const User = mongoose.model('User', UserSchema);

export default User;