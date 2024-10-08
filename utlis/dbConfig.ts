import { connect } from "mongoose";

export const dbConfig = async () => {
  const url = "mongodb://localhost:27017/testingDB";
  try {
    await connect(url).then(() => {
      console.clear();
      console.log("server connected ");
    });
  } catch (error: any) {
    console.error(error);
  }
};
