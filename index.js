const dotenv = require("dotenv");
const mongoose = require("mongoose");
const refugeeRoute = require("./routes/refugee.route");
const usersRoute = require("./routes/user.route");
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require("express");
const app = express();
const path = require('path'); 

dotenv.config();

// connect to mongodb
// we would connect our database here instead of the hardcoded string below. 
// Create an environment variable for the database to connect for mongoose. 
mongoose
  .set('useCreateIndex', true)
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database..."))
  .catch(err => console.error("Could not connect to MongoDB database..."));

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
  origin: "https://desolate-basin-46881.herokuapp.com/",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// CORS Policy 
app.use(cors(corsOptions));

// Set the limit for file sizes and payload size. 
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

// api routes 
app.use("/api/users", usersRoute);
app.use("/api/refugees", refugeeRoute);

// Serve static assets if in production
app.use(express.static("frontend/build"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));