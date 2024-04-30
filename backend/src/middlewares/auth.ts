import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";
import ExtendedRequest from "../utils/ExtendedRequest";

const auth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate token
    if (!req.cookies.token) {
      return res.status(401).send({ message: "User not logged in." });
    }

    // Verify token
    try {
      const decode = jwt.verify(
        req.cookies.token,
        process.env.JWT_SECRET || "SECRET"
      );

      if (typeof decode !== "string" && decode.id) {
        const user = await User.findById(decode.id);

        if (!user) {
          return res.status(401).send({ message: "Invalid token id" });
        }

        user.password = "";
        req.user = user;
      }
    } catch (JsonWebTokenError) {
      return res.status(401).send({ message: "Invalid token." });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

export default auth;
