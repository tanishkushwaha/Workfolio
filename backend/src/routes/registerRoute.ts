import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user";

const router = express.Router();

interface userDetailsType {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

router.post("/", async (req, res) => {
  try {
    const userDetails: userDetailsType = req.body;

    // Validate data
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.password ||
      !userDetails.email
    ) {
      return res.status(400).send({
        message:
          "Send all the required fields: firstName, lastName, password, email.",
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email: userDetails.email });
    if (existingUser) {
      return res.status(401).send({ message: "Email already exists." });
    }

    // Hash password
    const encPass = await bcrypt.hash(userDetails.password, 10);

    // Save into DB
    await User.create({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      password: encPass,
      email: userDetails.email,
    });

    return res.status(200).send({ message: "User registered successfully!" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err });
  }
});

export default router;
