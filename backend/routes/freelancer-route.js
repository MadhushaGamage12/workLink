const express = require('express');
const router = express.Router();
const { saveFreelancerProfile } = require("../Service/freelancerService");

// Define your routes
router.post("/api/freelancer/profile", saveFreelancerProfile);

module.exports = router;



