import { NextFunction } from "express";

const mwAuth = (req: any, res: any, next: any) => {
  //   console.log(req.body);

  next();
};

export default mwAuth;
