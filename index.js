//importing module
const express = require('express');

//make express in executable form
const app = express();

//Send response to the web page
app.get("/",(req, resp)=>
{
    resp.send("App is working!")
});
app.listen(5000)
