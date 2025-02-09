// 백엔드 시작점
const express = require("express");
const app = express();
const port = 5001;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://jiwoo:abcd1234@boilerplate.oyfps.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate",
    {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World! ~안녕하세요~"));

app.listen(port, () => console.log(`Example app listening on port ${port}!"`));
