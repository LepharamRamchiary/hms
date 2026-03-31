import mongoose from "mongoose";

const assistantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    employeeID: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    assistantAvatar: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Assistant = mongoose.model("Assistant", assistantSchema);
