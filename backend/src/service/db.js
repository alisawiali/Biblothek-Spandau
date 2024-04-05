import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.ATLAS_API, {
      dbName: process.env.BibliothekApp,
    });
    console.log("Connection to DB established!");
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`);
  }
}