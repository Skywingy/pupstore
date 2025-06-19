import mongoose from "mongoose";

const bonsaiSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  level: { type: Number, default: 1 },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bonsai", bonsaiSchema);
