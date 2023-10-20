const express = require("express");
const app = express();
const mogan = require("morgan");
const router = require("./routers");
const dotenv = require("dotenv");
dotenv.config();

app.use(mogan("combined"));
/* 
connect db
*/
app.use(express.json());
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
