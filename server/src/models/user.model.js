import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: ture,
    },
    password: {
      type: String,
      required: ture,
    },
    phone: {
      type: String,
      required: ture,
    },
    role: {
      type: String,
      enum: ["admin", "doctor", "assistant", "patient"],
      required: ture,
    },
    isActive: {
      type: Boolean,
      default: ture,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
