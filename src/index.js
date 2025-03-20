// const express = require('express');

import express from "express";
import cors from "cors";
import "dotenv/config";
import job from "./lib/cron.js";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

job.start();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.use(express.json({ limit: "10mb" })); // Giới hạn kích thước dữ liệu JSON là 10MB
app.use(express.urlencoded({ limit: "10mb", extended: true })); // Giới hạn kích thước tệp tải lên qua form

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  connectDB();
});
