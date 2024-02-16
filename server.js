require("dotenv").config();

const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db.connect");
const route = require("./routes");
const path = require("path");
const app = express();


// cors
const options = {
  origin: "*",
};
app.use(cors(options));

// cookie
app.use(cookieParser());

// body parser 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/v1", route);

//database connection
connectDB();


// server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started");
});
