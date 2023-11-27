import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import noteRoute from "./routes/route.js";

configDotenv();
import "./config/dbConfig.js";
app.use(morgan("dev"));

app.use(
  cors({
    origin: [process.env.FRONTEND],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/", noteRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
