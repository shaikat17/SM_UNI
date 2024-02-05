import mongoose from "mongoose"
import { Server } from 'http'
import app from './app'
import config from './config'

let server: Server

async function main() {
    try {
        await mongoose.connect(config.database_URL as string);
    server = app.listen(config.port, () => {
        console.log(`App is running on port ${config.port}`)
    })
    } catch (error) {
        console.log("🚀 ~ file: server.ts:11 ~ main ~ error:", error)
        
    }
  }

  main()
  