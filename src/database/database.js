import mongoose from 'mongoose'
import { MONGODB_URI } from '../config/config'

(async () => {
    try {
        const database = await mongoose.connect(MONGODB_URI)
        console.log('Database connected in:', database.connection.name)
    } catch (error) {
        console.log(error)
    }
})()
