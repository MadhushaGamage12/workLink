// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const path = require("path");
// const connectDB = require("./config/db");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // MongoDB Connection
// mongoose
//   .connect("mongodb://localhost:27017/freelancers", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("Database connection error: ", err));

// // Routes
// const profileRoutes = require("./routes/profileRoutes");
// app.use("/api/profiles", profileRoutes);

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));





// const express = require("express");
// const cors = require("cors");
// const freelancerRoutes = require("./routes/freelancer-route");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Use routes
// app.use("/api", freelancerRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
