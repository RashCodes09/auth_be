import { model, Schema } from "mongoose";
// import { iUserData } from "../utlis/interface";

const userModel = model(
  "testusers",
  new Schema(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
      },
      verifyToken: {
        type: String,
      },
      verify: {
        type: Boolean,
      },
    },
    { timestamps: true }
  )
);

export default userModel;
