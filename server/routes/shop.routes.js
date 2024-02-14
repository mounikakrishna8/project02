
// scrunchies: price_1OfYZCAzxk7JvbcB6BbwA0Ih
//hairclips: price_1OfYbEAzxk7JvbcBdNpfu5CT
// shark-amigurumi: price_1OfYcvAzxk7JvbcB5r7r9TND


import { Router } from "express";
import { User } from "../models/index.js";

const shopRoutes = Router();

shopRoutes.post("/checkout", async (req, res) => {

  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity
    })
  });
  const session = await Stripe.checkout.session.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://http://localhost:4090/success",
    cancel_url: "http://localhost:4090/cancel"
  });

  res.send(JSON.stringify({
    url: session.url
  }));

});



export default shopRoutes;