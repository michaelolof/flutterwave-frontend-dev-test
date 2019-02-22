//@ts-nocheck
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res, next) => {
  res.sendFile( path.join( __dirname, "dist/index.html" ) )
})

app.listen( 3000 || process.env.PORT );