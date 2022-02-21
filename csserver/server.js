const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const PORT = 80
const db = require('./db')
const router = require('./routes')


db.connect()
//middleware
app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))

//cors
app.use((req, res, next) =>{
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-control-Allow_Headers", "*")
    next()
})

//routes

app.use('/api', router)

app.use('/uploads', express.static(path.join(__dirname,"/../uploads")))
app.use( express.static(path.join(__dirname,"/../csclient/build")))

app.get("*", (req,res)=>{
    try{
        res.sendFile(path.join(`${__dirname}/../csclient/build/index.html`))
    } catch(e){
        console.log("Something went wrong and I dpn't know what")
    }
})

app.use(cors())

app.listen(process.env.PORT|| PORT, ()=>{
    console.log(`Listening on port number ${PORT}`)

})



