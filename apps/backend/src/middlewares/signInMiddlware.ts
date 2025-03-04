import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = require("@repo/backend-common/config");

export function signInMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers["authorization"] ?? "";

  if (!token) {
    res.status(401).json({ message: "Token not provided" });
    return;
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { userId: string };
    req.userId = decodedToken.userId; // Extend `Request` to include `userId`
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
}
