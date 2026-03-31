import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Patient } from "../models/patient.model.js";

// patient registartion
const patientRegistartion = asyncHandler(async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  if (
    [name, email, password, phone, role].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { phone }],
  });

  if (existedUser) {
    if (existedUser.email === email) {
      throw new Error("Email already registered");
    }
    if (existedUser.phone === phone) {
      throw new Error("Phone already registered");
    }
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    role,
  });

  const patient = await Patient.create({
    userId: user._id,
  });

  const createdPatient = await Patient.findById(patient._id).populate(
    "userId",
    "-password -refreshToken",
  );

  return res
    .status(201)
    .json(new ApiResponse(200, createdPatient, "User registered successfully"));
});

export { patientRegistartion };
