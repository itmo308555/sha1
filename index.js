import express from "express";
import multer from "multer";
import sizeOf from "image-size";
import sharp from "sharp";
import fs from "fs";
import axios from "axios";
import crypto from "crypto";

const app = express();



app
  .use(express.urlencoded({ extended: true }))
  .set("view engine", "ejs")
  .set("views", "views")
  
  .post("/sha1", (r) => {
    r.res.render("./sha", {
      value: crypto.createHash("sha1").update(r.body.inp).digest("hex"),
    });
  })
  
  .get("/sha1", (r) => {
    r.res.render("./sha", { value: "" });
  })
  
  .all("/login", (r) => r.res.send("bao-vn"))
  .listen(process.env.PORT || 3000, () => {
    console.log("Server is working");
  });
