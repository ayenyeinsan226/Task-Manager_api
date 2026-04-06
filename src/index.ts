import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/database.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Task Manager API Running");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("DB Error:", err));