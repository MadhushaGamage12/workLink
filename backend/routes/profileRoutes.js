// const express = require("express");
// const multer = require("multer");
// const Profile = require("../models/freelancer");

// const router = express.Router();

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });



// // Create Profile
// router.post("/", upload.single("projectImage"), async (req, res) => {
//   const { name, title,email, bio, skills, projects } = req.body;
//   const projectImage = req.file ? `/uploads/${req.file.filename}` : null;

//   const newProfile = new Profile({
//     name,
//     title,
//     email,
//     bio,
//     skills: JSON.parse(skills),
//     projects: projectImage
//       ? [...JSON.parse(projects), { projectName: req.body.projectName, projectImage }]
//       : JSON.parse(projects),
//   });

//   try {
//     const savedProfile = await newProfile.save();
//     res.status(201).json(savedProfile);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get All Profiles
// // router.get("/", async (req, res) => {
// //   try {
// //     const profiles = await Profile.find();
// //     res.json(profiles);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// module.exports = router;
