"use strict";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        if (!process.env.JWT_KEY) {
            console.error("JWT_KEY is not defined in environment variables");
            return res.status(500).json({ message: "Server configuration error." });
        }

        const token = req.cookies?.token; // Optional chaining to avoid crashes

        if (!token) {
            return res.status(401).json({ message: "You are unauthorized." });
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req._id = decoded._id; // Attach user ID to request object

        next(); // Proceed to the next middleware
    } catch (error) {
        return res.status(401).json({ message: "Invalisd or expired token." });
    }
};
