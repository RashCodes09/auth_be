import { mainApp } from "./main";
import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utlis/dbConfig";

const app: Application = express();
const PORT: number = 3377;

app.use(cors({ origin: "*" }));
app.use(express.json());
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

mainApp(app);

app.listen(PORT, () => {
  console.clear();

  dbConfig();
});
