import express from "express";
import multer from "multer";
import sizeOf from "image-size";
import sharp from "sharp";
import fs from "fs";
import axios from "axios";
import crypto from "crypto";

const app = express();

const img = multer({
  dest: "./img",
});

app
  .use(express.urlencoded({ extended: true }))
  .set("view engine", "ejs")
  .set("views", "views")
  
  
  .get("/sha1", (r) => {
    r.res.render("./sha", { value: "" });
  })
  .post("/sha1", (r) => {
    r.res.render("./sha", {
      value: crypto.createHash("sha1").update(r.body.inp).digest("hex"),
    });
  })
  .all("/login", (r) => r.res.send("bao-vn"))
  .listen(process.env.PORT || 3000, () => {
    console.log("Server is working");
  });
