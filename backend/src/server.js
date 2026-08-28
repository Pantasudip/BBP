const express=require("express");
const cors=require("cors");
const mysql=require("mysql2/promise");
require("dotenv").config();
const app=express(); app.use(cors()); app.use(express.json());
const pool=mysql.createPool({
 host:process.env.DB_HOST||"localhost", port:+(process.env.DB_PORT||3306),
 database:process.env.DB_NAME||"bbpf", user:process.env.DB_USER||"root",
 password:process.env.DB_PASSWORD||"root", connectionLimit:10
});
app.get("/api/health",async(_req,res)=>{try{await pool.query("SELECT 1");res.json({ok:true,message:"BBPF API and MySQL are connected."})}catch(e){res.status(500).json({ok:false,message:e.message})}});
app.post("/api/contact",async(req,res)=>{
 const {name,email,message}=req.body||{};
 if(!name||!email||!message)return res.status(400).json({message:"Name, email and message are required."});
 try{await pool.query("INSERT INTO contact_messages(name,email,message) VALUES(?,?,?)",[name,email,message]);res.status(201).json({message:"Thank you. Your message has been received."})}
 catch(e){res.status(500).json({message:e.message})}
});
app.listen(+(process.env.PORT||5000),()=>console.log("BBPF API running on port 5000"));
