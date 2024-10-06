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


app.get('/FrontEndSkills',(req, res)=>{


    const skillsObject = {
        libraries: "React, Angular",
        languages: "HTML, CSS, JavaScript"
    }
    res.json(skillsObject)
})

app.listen(process.env.PORT,()=>{
    console.log(`running Tailor on port : ${port}.`)
})
