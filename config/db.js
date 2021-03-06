const mongoose = require('mongoose') //(13)
const config = require('config') // global variable
const db = config.get('mongoURI')

const connectDB = async () => { 
    try { 
        await mongoose
        .connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected...')
        
    } catch (err) {
        console.error(err.message)
        process.exit(1) // will exit with failure
    }
}


module.exports = connectDB // (14) --> bring into server.js