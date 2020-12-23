const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I14lMLNV0e0lpJ9IjktJ8dKU0OpSdXYetkbboVrNtNRSgetdLBRu05UL8mWsSkE9wmRwflm1rkbwRO88N5EE1Pp00qDIRMGbe');

//API

// App config
const app = express();
//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());
//API routes

app.get("/", (req, res) => res.status(200).send("hello,it's me!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(`Payment Request Received!!1`, total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
})

//Listen command
exports.api = functions.https.onRequest(app);

//example 
//http://localhost:5001/clone-6cb8c/us-central1/api