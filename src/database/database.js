import mongoose from 'mongoose'

(async () => {
    try {
        const database = await mongoose.connect('mongodb://localhost/taskdb')
        console.log('Database connected in:', database.connection.name)
    } catch (error) {
        console.log(error)
    }
})()