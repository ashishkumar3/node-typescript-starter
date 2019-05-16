import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT;

// configure express to use ejs
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

app.get("/", (req: any, res: any) => {
  // render index template
  res.render("index");
});

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on Port: ${PORT}`);
});
