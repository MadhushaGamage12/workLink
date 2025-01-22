const Freelancer = require('./models/freelancer');

const saveFreelancerProfile = async (req, res) => {
    try {
        const { name, title, email, bio, skills, portfolio } = req.body; // Destructure fields from request body
        
        // Create a new freelancer profile
        const newFreelancer = new Freelancer({
            name,
            title,
            bio,
            skills,
            portfolio,
            email,
        });

        // Save the profile to the database
        const saveFreelancerProfile = await newFreelancer.save();

        // Send a success response with the saved profile
        res.status(201).json({ message: "Freelancer profile created successfully", profile: saveFreelancerProfile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while saving the profile", error: error.message });
    }
};

module.exports = { saveFreelancerProfile };