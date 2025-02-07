
export const authCallback = async (req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;
        // Check if user already exists
        let user = await user.findOne({ clerkId: id });
        if (!user) {
            // Signup
            user = await user.create({ clerkId: id, fullName: `${firstName} ${lastName}`, imageUrl });
        }
        res.status(200).json({ success:true });
    } catch (error) {
        console.log("Error in auth callback", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};