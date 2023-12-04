import express from "express";
import md5 from "md5";
import cors from "cors";
import db from "./controllers/database.js"
import axios from "axios";
import jwt from "jsonwebtoken"

import {verifyJwt, createJwt} from "./middlewares/auth.js"



// import userRoutes from "./routes/users.js"

const app = express();
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const port = process.env.PORT || 5000

const secretKey = "ThisisSecretKey";

app.post("/login", async function (req, res) {

  var userid = req.body.userid;
  var password = md5(req.body.password);

  var existinguser = await db.query("Select password, department_id from employees where name='" + userid + "'")

  if (existinguser[0][0] == undefined) {
    return res.json({status:"404",message:"User not found"})
  }
  else {
    if (password === existinguser[0][0].password) {
      const token = createJwt(password);
      var department = await db.query("Select name from departments where department_id='" + existinguser[0][0].department_id + "'")
      res.json({ Login: true, token: token,data: department[0][0].name })
    } else {
      res.json({Value: true, status:"401",message:"Unauthorize Access: Password didnt match"});
    }
  }

})

app.listen(port, function () {
  console.log(`server is running on port number ${port}`);
})