require('dotenv').config()
const express = require("express")


const app = express()
const port = process.env.PORT

app.get('/',(req, res) =>{
    res.send('Welcome to Tailor!')
})
app.get('/Login',(req, res)=>{
    res.send('<h2>This will be the login page.</h2>')
})


app.listen(process.env.PORT,()=>{
    console.log(`running Tailor on port : ${port}.`)
})
