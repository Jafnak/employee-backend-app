const cors=require("cors")
const express =require("express")
const mongoose=require("mongoose")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hiiiiiiiiii")
})

app.post("/add",(req,res)=>{
    res.send("Jaffff")
})

app.listen(8080,()=>{
    console.log("server started")
})