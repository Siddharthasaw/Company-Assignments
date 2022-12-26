const express = require("express")
const mongoose = require("mongoose")
const server = require("./servise/servise")
const app = express()


app.use(express.json())

mongoose.set('strictQuery',true);

mongoose.connect("mongodb+srv://Siddharth609:q8PCZ8BpcFz4-nc@cluster0.thktdho.mongodb.net/Customer-card-A",{
    useNewUrlParser : true
})

.then(()=> console.log("mongoDB is conected"))
.catch((err)=> console.log(err))

app.use('/',server)

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("application is runing in ", 3000)
})


