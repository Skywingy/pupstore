import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
