import { Response, NextFunction } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import User from "../models/user";
import ExtendedRequest from "../utils/ExtendedRequest";

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || "SECRET");
  } catch (error) {
    throw new JsonWebTokenError("Invalid token.");
  }
};

const auth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({ message: "User not logged in." });
    }

    const decoded = verifyToken(token);

    if (typeof decoded !== "string" && decoded.id) {
      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).send({ message: "Invalid token id" });
      }

      user.password = ""; // Hide password
      req.user = user;
    }

    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).send({ message: error.message });
    } else if (error instanceof Error) {
      console.error(error);
      return res.status(500).send({ message: error.message });
    } else {
      console.error("An unexpected error occurred");
      return res.status(500).send({ message: "An unexpected error occurred" });
    }
  }
};

export default auth;
