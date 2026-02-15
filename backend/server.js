import express from "express"
import 'dotenv/config' 

const app= express()


const port = process.env.PORT || 4001
app.listen(port,() =>{
    console.log(`server is started at ${port}`);
    
})
 