import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    employeeID: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    doctorAvatar: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
