const server = require('./src/app')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Database FloraTour"))
    .catch((error) => console.log(error))

//up server
server.listen(port, () => {
    console.log("Server listening in port", port)
})