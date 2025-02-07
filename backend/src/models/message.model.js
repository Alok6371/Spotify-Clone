import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema("Message", {
    senderId: {
        type: String,
        required: true
    },
    recieverId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { Timestamp: true });

export default Message = mongoose.model("Message", messageSchema);