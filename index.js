import express from "express";
import multer from "multer";
import sizeOf from "image-size";
import sharp from "sharp";
import fs from "fs";
import axios from "axios";
import crypto from "crypto";

const app = express();


async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
}


app
  .use(express.urlencoded({ extended: true }))
  .set("view engine", "ejs")
  .set("views", "views")
  
  .post("/sha1", (r) => {
    r.res.render("./sha", {
      //value: crypto.createHash("sha1").update(r.body.inp).digest("hex"),
	  value: sha256(r.body.inp),
    });
  })
  
  .get("/sha1", (r) => {
    r.res.render("./sha", { value: "" });
  })
  
  .all("/login", (r) => r.res.send("bao-vn"))
  .listen(process.env.PORT || 3000, () => {
    console.log("Server is working");
  });
