import express from "express";

const app = express();

app.get("/", (req: any, res: any) => {

  res.send("Hello, World fellas");
});

app.listen(3000);
