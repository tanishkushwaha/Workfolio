import { Router, Response } from "express";
import auth from "../middlewares/auth";
import ExtendedRequest from "../utils/ExtendedRequest";

const router = Router();

router.get("/", auth, (req: ExtendedRequest, res: Response) => {
  return res.status(200).send(req.user);
});

export default router;
