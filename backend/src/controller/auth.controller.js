import User from "../models/user.model.js";

export const authCallback = async (req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;
        
        if (!id || !firstName || !lastName || !imageUrl) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if user already exists
        let user = await User.findOne({ clerkId: id });
        if (!user) {
            // Signup
            user = await User.create({ clerkId: id, fullName: `${firstName} ${lastName}`, imageUrl });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        console.log("Error in auth callback", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};