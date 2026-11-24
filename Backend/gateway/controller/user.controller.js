export const getcurrentUser = async (req, res) => {
    try {
        return res.status(200).json({ user: req.user });
    } catch (error) {
        console.error("Error in getcurrentUser:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}