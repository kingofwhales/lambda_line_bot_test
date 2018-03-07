const serverless = require("serverless-http")
const express = require("express")
const app = express()
const crypto = require('crypto')
const bodyParser = require("body-parser")
const line = require("@line/bot-sdk")
const axios = require('axios')
const https = require("https");

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
    res.send("matched")
    console.log("----------matched conditions--------");
    console.log("----------matched conditions--------");
    console.log("----------matched conditions--------");
    console.log("----------matched conditions--------");

    let replyKey = "Bearer " + "oPo32JHLRrDJHbcGNpinlmkfgSwdRsFdn84CS1qQq7gGS6kFKPMQzIKmRkUh4UX40xx5aB0DxG1e+zj1FyLGfujefaU3uG1cIiCuhrKuFs2K24GUae3/27R/0nUbFv5jJA+Jj1+KiNeduQXl4VtpogdB04t89/1O/w1cDnyilFU=";
    let replyToken = req.body.events[0].replyToken
    let message = [
      {
        type: "text",
        text: "i have received your message. Congrats! we did it!"
      }
    ];
    let userID = req.body.events[0].source.userId
    // console.log('---replytoken-----')
    // console.log("---replytoken-----");
    // console.log("---replytoken-----");
    // console.log("---replytoken-----");
    // console.log(replyToken)

    axios({
      method: "post",
      url: "https://api.line.me/v2/bot/message/push",
      headers: {
        "Content-Type": "application/json",
        Authorization: replyKey
      },
      // httpsAgent: new https.Agent({
      //   ciphers: 'DES-CBC3-SHA'
      // }),
      data: {
        to: "Ua4349531c4ff8c983b5b8a88b026188e",
        messages: [
          {
            type: "text",
            text: "hahaha we did it!"
          }
        ]
      },
      validateStatus: function(status) {
        console.log("----status code is-----");
        console.log("----status code is-----");
        console.log("----status code is-----");
        console.log("----status code is-----");
        console.log("----status code is-----");
        console.log("----status code is-----");
        console.log(status)
        return status >= 200 && status < 300
      }
    })
      .then(function(response) {
        console.log("---success---");
        console.log("---success---");
        console.log("---success---");
        console.log("---success---");
        console.log(response.status)
        console.log(response);
      })
      .catch(function(err) {
        console.log("---success---");
        console.log("---success---");
        console.log("---success---");
        console.log("---success---");
        console.log(err);
      });




    // const client = new line.Client({
    //   channelAccessToken:
    //     "oPo32JHLRrDJHbcGNpinlmkfgSwdRsFdn84CS1qQq7gGS6kFKPMQzIKmRkUh4UX40xx5aB0DxG1e+zj1FyLGfujefaU3uG1cIiCuhrKuFs2K24GUae3/27R/0nUbFv5jJA+Jj1+KiNeduQXl4VtpogdB04t89/1O/w1cDnyilFU=",
    //   channelSecret: "5a8d01f3fdeedbfeb15d574f3f01eabc"
    // });
    // // const message = {
    // //   type: 'text',
    // //   text: 'i have received your message. Congrats! we did it!'
    // // };
    // client
    //   .pushMessage(userID, message)
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
  } else {
    res.send('you are not from line')
  }
})


app.get("/users", function(req, res) {
  res.send("what??");
})

module.exports.handler = serverless(app)
