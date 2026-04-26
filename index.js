import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import MainRoutes from "./src/routers/main.routs.js";

dotenv.config({ path: "./src/.env" });

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.get("/",(req,res)=>{
    res.send("server is running..")
})
server.use("/api", MainRoutes);

export default server;