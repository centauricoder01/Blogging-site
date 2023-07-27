import { Request, Response, NextFunction } from "express";

function CheckHeader(req:Request, res:Response, next:NextFunction) {
  const HEADER = req.headers;

  if (HEADER.header != process.env.HEADER) {
    return res.status(400).json({
      error: "Header does'nt match to your system",
    });
  }
  next();
}

export { CheckHeader };
