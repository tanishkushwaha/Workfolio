import { Router, Request, Response, CookieOptions } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user";

const router = Router();

interface userLoginType {
  email: string;
  password: string;
}

router.post("/", async (req: Request, res: Response) => {
  try {
    const userDetails: userLoginType = req.body;

    // Validation
    if (!userDetails.email || !userDetails.password) {
      return res
        .status(400)
        .send({ message: "Send all the required fields: email, password." });
    }

    // Check if the user exists and match credentials
    const user = await User.findOne({ email: userDetails.email });
    if (!user || !(await bcrypt.compare(userDetails.password, user.password))) {
      return res.status(401).send({ message: "Invaild credentials." });
    }

    // Generate Token
    const userToken = jwt.sign(
      {
        id: user._id,
        email: userDetails.email,
      },
      process.env.JWT_SECRET || "SECRET",
      {
        expiresIn: "2h",
      }
    );

    // Send token as a cookie
    const options: CookieOptions = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/",
    };
    return res
      .status(200)
      .cookie("token", userToken, options)
      .send({ message: "Login successful.", token: userToken });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
});

export default router;
