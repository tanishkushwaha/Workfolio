import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userResumeRoute from "./routes/userResumeRoute";
import signupRoute from "./routes/registerRoute";
import mwAuth from "./middlewares/mwAuth";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mwAuth);
app.use("/register", signupRoute);
app.use("/userresume", userResumeRoute);

app.get("/", (req, res) => {
  res.send("Workfolio!");
});

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`App running on port: ${process.env.PORT}`);
});
