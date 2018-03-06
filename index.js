const serverless = require("serverless-http")
const express = require("express")
const app = express()
const crypto = require('crypto')
const bodyParser = require("body-parser")
const line = require("@line/bot-sdk")
const axios = require('axios')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.get("/", function(req, res) {
  res.send("Hello World!")
})

app.post("/", function(req, res) {
  let header = req.get("X-Line-Signature")
  const channelSecret = "5a8d01f3fdeedbfeb15d574f3f01eabc" // Channel secret string
  const body = JSON.stringify(req.body) // Request body string
  const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64')
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log("----------request body and sig and header--------");
  console.log(body)
  console.log(signature)
  console.log(header)

  if (signature === header) {
    console.log("----------matched conditions--------");
    console.log("----------matched conditions--------");
    console.log("----------matched conditions--------");
    console.log("----------matched conditions--------");

    let replyKey = "Bearer " + "oPo32JHLRrDJHbcGNpinlmkfgSwdRsFdn84CS1qQq7gGS6kFKPMQzIKmRkUh4UX40xx5aB0DxG1e+zj1FyLGfujefaU3uG1cIiCuhrKuFs2K24GUae3/27R/0nUbFv5jJA+Jj1+KiNeduQXl4VtpogdB04t89/1O/w1cDnyilFU=";
    let replyToken = req.body.events[0].replyToken
    let message = [{ type: "text", text: "i have received your message. Congrats! we did it!" }];
    console.log('---replytoken-----')
    console.log("---replytoken-----");
    console.log("---replytoken-----");
    console.log("---replytoken-----");
    console.log(replyToken)

    // axios({
    //   method: "post",
    //   url: "https://api.line.me/v2/bot/message/reply",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: replyKey
    //   },
    //   data: {
    //     replyToken: replyToken,
    //     messages: message
    //   }
    // })
    //   .then(function(response) {
    //     console.log("---success---");
    //     console.log("---success---");
    //     console.log("---success---");
    //     console.log("---success---");
    //     console.log(response);
    //   })
    //   .catch(function(err) {
    //     console.log("---success---");
    //     console.log("---success---");
    //     console.log("---success---");
    //     console.log("---success---");
    //     console.log(err);
    //   });




    // const client = new line.Client({
    //   channelAccessToken:
    //     "oPo32JHLRrDJHbcGNpinlmkfgSwdRsFdn84CS1qQq7gGS6kFKPMQzIKmRkUh4UX40xx5aB0DxG1e+zj1FyLGfujefaU3uG1cIiCuhrKuFs2K24GUae3/27R/0nUbFv5jJA+Jj1+KiNeduQXl4VtpogdB04t89/1O/w1cDnyilFU=",
    //   channelSecret: "5a8d01f3fdeedbfeb15d574f3f01eabc"
    // });
    // const message = {
    //   type: 'text',
    //   text: 'i have received your message. Congrats! we did it!'
    // };
    // client
    //   .replyMessage(req.body.events[0].replyToken, message)
    //   .then((data) => {
    //     console.log('-success-')
    //     console.log("-success-");
    //     console.log("-success-");
    //     console.log("-success-");
    //     console.log("-success-");
    //     console.log(data)
    //   })
    //   .catch(err => {
    //     // error handling
    //     console.log("-error-");
    //     console.log("-error-");
    //     console.log("-error-");
    //     console.log("-error-");
    //     console.log("-error-");
    //     console.log("-error-");
    //     console.log("-error-");
    //     console.log(err)
    //   });
    res.send('matched')
  } else {
    res.send('you are not from line')
  }
})


app.get("/users", function(req, res) {
  res.send("what??");
})

module.exports.handler = serverless(app)
