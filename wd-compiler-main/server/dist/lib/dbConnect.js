"use strict";
import mongoose from "mongoose";

const dbConnect = async () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is not defined in environment variables");
        process.exit(1);
    }

    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("Already connected to database.");
            return;
        }

        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "wd-compiler",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connection established successfully!");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
        process.exit(1);
    }
};

export { dbConnect };

