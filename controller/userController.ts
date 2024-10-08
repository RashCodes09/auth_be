import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import crypto from "crypto";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const token = crypto.randomBytes(3).toString("hex");
    const user = await userModel.create({
      name,
      email,
      password: hashed,
      verifyToken: token,
      verify: false,
    });

    // console.log(" User token:", token);

    return res
      .status(201)
      .json({ message: "User created successfully", data: user });
  } catch (error: any) {
    return res
      .status(400) // Changed to 400 for a more appropriate error status
      .json({ message: "User not created", error: error.message });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // const { name, email, password } = req.body;
    const users = await userModel.find();
    return res.status(201).json({ message: "all user gotten", data: users });
  } catch (error: any) {
    return res
      .status(400) // Changed to 400 for a more appropriate error status
      .json({ message: "users not found", error: error.message });
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { token } = req.body;
    const getUser = await userModel.findById(userID);
    if (getUser?.verifyToken === token) {
      const user = await userModel.findByIdAndUpdate(
        userID,
        {
          verifyToken: "",
          verify: true,
        },
        { new: true }
      );
      console.log("userID", userID);

      return res
        .status(201)
        .json({ message: "user has been verified", data: user });
    } else {
      return res.status(404).json({
        message: "User not verified",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "User does not exist",
      error: error.message,
    });
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    // const { userID } = req.params;
    const { email } = req.body;
    const getUser = await userModel.findOne({ email });
    // if (getUser && getUser?.verify) {
    //   const token = crypto.randomBytes(3).toString("hex");
    //   const user = await userModel.findByIdAndUpdate(
    //     getUser?._id,
    //     {
    //       verifyToken: token,
    //       verify: false,
    //     },
    //     { new: true }
    //   );

    return res.status(201).json({
      message: "user email has been found",
      data: getUser,
    });
    // } else {
    //   return res.status(404).json({
    //     message: "user email not found",
    //   });
    // }
  } catch (error: any) {
    return res.status(404).json({
      message: "User does not exist",
      error: error.message,
    });
  }
};

export const resetUserPassword = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { password } = req.body;

    const getUser = await userModel.findById(userID);
    if (getUser) {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      const user = await userModel.findByIdAndUpdate(getUser, {
        password: hashed,
      });
      // console.log("Created User:", user);

      return res
        .status(201)
        .json({ message: "Userpassword update successfully", data: user });
    } else {
      return res
        .status(400) // Changed to 400 for a more appropriate error status
        .json({ message: "Userpassword update declined" });
    }
  } catch (error: any) {
    return res
      .status(400) // Changed to 400 for a more appropriate error status
      .json({ message: "User does not exist", error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { name, email, password } = req.body;
    // console.log("Request Body:", name);

    const getUser = await userModel.findById(userID);
    if (getUser) {
      // const salt = await bcrypt.genSalt(10);
      // const hashed = await bcrypt.hash(password, salt);

      const user = await userModel.findByIdAndUpdate(getUser, {
        name,
        email,
        password,
      });
      // console.log("Created User:", user);

      return res
        .status(201)
        .json({ message: "User update successfully", data: user });
    } else {
      return res
        .status(400) // Changed to 400 for a more appropriate error status
        .json({ message: "deos not exist" });
    }
  } catch (error: any) {
    return res
      .status(400) // Changed to 400 for a more appropriate error status
      .json({ message: "User not update", error: error.message });
  }
};
