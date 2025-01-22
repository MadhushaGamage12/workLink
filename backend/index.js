const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./database/database');

// Import routes
const freelancerRoute = require('./routes/freelancer-route');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/freelancer', freelancerRoute);

const port = process.env.PORT || 3000; // Default to 3000 if not defined in .env

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
