require('dotenv').config()
const express = require('express');
const app = express();
let port = 4000;
app.get("/", (req, res) => {
    res.send("this is my page")
})
app.get("/tiwtter", (req, res) => {
    res.send("responce tiwtter")
})
app.get("/login", (req, res) => {
    res.send("<h1>that is h1 heading to bold")
})


app.listen(process.env.port, () => {
    console.log("app listen on port", port)
})