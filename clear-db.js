/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require("mongoose");
const fs = require("fs");

const envFile = fs.readFileSync(".env.local", "utf8");
const MONGODB_URI = envFile.split("\n").find(line => line.startsWith("MONGODB_URI=")).replace("MONGODB_URI=", "").trim();

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log("Connected successfully to clear DB!");
    const db = mongoose.connection.db;
    const bookings = db.collection("bookings");
    const result = await bookings.deleteMany({});
    console.log(`Deleted ${result.deletedCount} bookings.`);
    process.exit(0);
  })
  .catch(err => {
    console.error("Connection error:", err);
    process.exit(1);
  });
