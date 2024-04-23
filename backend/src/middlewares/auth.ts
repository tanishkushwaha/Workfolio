import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";

interface ExtendedRequest extends Request {
  user?: JwtPayload;
}

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
        const userExists = await User.findById(decode.id);

        if (!userExists) {
          return res.status(401).send({ message: "Invalid token id" });
        }

        req.user = decode;
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
