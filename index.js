const express = require('express')
const DataBase = require('./configs/DataBase')

const app = express()
app.get('/',(req,res)=>{
    res.send({msg:"Home Page..."})
})
app.listen(8090,()=>{
    console.log("Server Strat")
    DataBase()
})