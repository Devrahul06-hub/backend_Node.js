const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(errorHandler)

app.use("/api/getSomething", require("./routes/CRUD"));

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
});
