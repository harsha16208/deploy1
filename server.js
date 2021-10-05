const express = require("express")

const app = express()
const routes = require('./routes/index.js')


app.use('/',routes)

app.listen(process.env.PORT || 3000,()=>{
    console.log("server started successfully");
})