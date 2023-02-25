const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const dbconnect = require('./connection');
const port = 4000;
dbconnect();
const loginRoute = require("./routes/loginResistraion");
const PostRoute = require("./routes/postroute")
app.use(loginRoute);
app.use(PostRoute);

app.listen(port , () => {
    console.log(`server is connected to posrt ${4000}`);
})