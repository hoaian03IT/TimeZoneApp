import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import mongoDB
import { connect } from "./config/db/index.js";
import { route } from "./routes/index.js";
import mongoose from "mongoose";

const PORT = 3033;
const app = express();

// connect DB
connect();

// middleware
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
        limit: "30mb",
    })
);

const corsConfig = {
    origin: true,
    credentials: true,
};
app.use(cors(corsConfig));
app.use(cookieParser());

// init route
route(app);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
