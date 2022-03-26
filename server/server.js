const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const storeInfo = require("./Api/storeInfo");

require("dotenv").config();

// connect to mongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })


app.use(cors());
app.use(bodyParser.json());


app.use('/storeInfo', storeInfo);


app.listen(PORT, () => console.log('express server ready'));


