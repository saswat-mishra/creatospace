const mongoose = require('mongoose')
const url = "mongodb+srv://creatospace:creatospace%40123@cluster0.oh0dn.mongodb.net/creatospace-mern?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log('Mongo db connected successfully')
    }).catch((e)=>console.log("Error:", e))
}