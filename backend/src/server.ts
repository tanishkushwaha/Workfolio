import express, { Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userResumeRoute from "./routes/userResumeRoute";
import signupRoute from "./routes/registerRoute";
import loginRoute from "./routes/loginRoute";
import logoutRoute from "./routes/logoutRoute";
import userRoute from "./routes/userRoute";
import auth from "./middlewares/auth";

dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/register", signupRoute);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/userresume", userResumeRoute);
app.use("/api/user", userRoute);

app.get("/", (_, res: Response) => {
  res.send("Workfolio!");
});

app.get("/api/restricted", auth, (_, res: Response) => {
  res.status(200).send({ message: "Welcome to the Restricted Area!" });
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
