import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userResumeRoute from "./routes/userResumeRoute";
import signupRoute from "./routes/registerRoute";
import loginRoute from "./routes/loginRoute";
import logoutRoute from "./routes/logoutRoute";
import auth from "./middlewares/auth";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/register", signupRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/userresume", userResumeRoute);

app.get("/", (req, res) => {
  res.send("Workfolio!");
});

app.get("/restricted", auth, (req, res) => {
  res.send({ message: "Welcome to the Restricted Area!" });
});

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port: ${process.env.PORT}`);
});
