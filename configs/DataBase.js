import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import { ENV_VARS } from '../configs/envVars.js'
export const DataBase = async () => {
    await mongoose.connect(ENV_VARS.MONGODB_URL)
    console.log("DataBaseConnet....")
}
