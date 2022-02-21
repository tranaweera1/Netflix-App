const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

// middleware 
dotenv.config();


// mongodb connecton
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
.then(() => console.log("DB connection Successfull"))
.catch((err) => console.log(err));

app.use(express.json());



// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);


// server listen

app.listen(8800, () => {
    console.log("backend server is running");
});