const mongoose = require('mongoose')

const DataBase = async () => {
    await mongoose.connect("mongodb+srv://netflixClone:netflixClone@cluster0.dgwjmgh.mongodb.net/netflixClone?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DataBaseConnet....")
}

module.exports = DataBase