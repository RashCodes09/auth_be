import { Response, Application, Request } from "express";
import user from "./router/userRouter";
// import user from "./router/userRouter";

export const mainApp = async (app: Application) => {
  try {
    const defaultRoute = (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "welcome to the default route",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    };
    app.get("/", defaultRoute);
    app.use("/api", user);
  } catch (error) {
    console.log("Error", error);
  }
};
