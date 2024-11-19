const express = require('express')
const cors = require('cors')
const DataBase = require('./configs/DataBase')

const app = express()
app.use(cors());

app.get('/home',(req,res)=>{
    res.send({msg:"Home Page..."})
})

app.listen(8090,()=>{
    console.log("Server Strat")
    DataBase()
})