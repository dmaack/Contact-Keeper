const express = require('express'); //(1) set up port / boilercode --> routes
const connectDB = require('./config/db'); //(12) --> set up gitignore for pushing code to github --> config/default -> db.js


const app = express();

// Connect Databse (15) --> user model
connectDB(); // bringing connect to DB into main server

// Init middleware
app.use(express.json({ extended: false })) // (18) now we can accept the body data --> back to user route

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to the ContactKeeper API'})
})

// Define Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/users', require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))