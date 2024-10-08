import { Router } from "express";
import {
  createUser,
  forgetPassword,
  getAllUsers,
  resetUserPassword,
  updateUser,
  verifyUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/create").post(createUser);
router.route("/get-all-users").get(getAllUsers);
router.route("/:userID/update").patch(updateUser);
router.route("/:userID/verify").patch(verifyUser);
router.route("/forget-password").patch(forgetPassword);
router.route("/:userID/resetpassword").patch(resetUserPassword);

export default router;
