import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from "./Assignments/routes.js";
import mongoose from "mongoose"
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

mongoose.connect(process.env.MONGODB_URL);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL,
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,

};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.set("trust proxy", 1)
app.use(express.json());

UserRoutes(app);
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
