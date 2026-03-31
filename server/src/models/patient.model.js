import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    patientAvatar: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Patient = mongoose.model("Patient", patientSchema);
