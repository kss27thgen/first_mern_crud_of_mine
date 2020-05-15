const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();

// Init MIddleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/posts", require("./routes/post"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
