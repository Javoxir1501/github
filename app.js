const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const port = 3030 || process.env.PORT

app.get('/', (req, res) =>{
    res.send('Hello World!')
      res.send('Hello World!')
})


    







app.listen(port, () => {
    console.log(`server running`)
})
