'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
const telegramBotToken = "214343648:AAEKHOC2AnxDPg7OW_vEBtb2mY4HGxNKw6k";
//TODO url should contain telegram bot token
//listening url and port should come from dockerfile / be env specific
//https://www.example.com/<token>
//http://192.168.99.100:49160/214343648:AAEKHOC2AnxDPg7OW_vEBtb2mY4HGxNKw6k/kakkasuu
//ziltoid url = https://ziltoid.dy.fi:8443/214343648:AAEKHOC2AnxDPg7OW_vEBtb2mY4HGxNKw6k/
//DOES BOT TAKE URL OR IMAGE AS RETURN VALUE, CALL SOME BOT FUNCTION? https://core.telegram.org/bots/api#inlinequeryresultgif
//https://api.telegram.org/bot214343648:AAEKHOC2AnxDPg7OW_vEBtb2mY4HGxNKw6k/
//1. take parameter from url
//2. use parameter to get url OR image from giffy random
//3. send url OR image back to bot
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
