import { Router } from "express";
import { User } from "../models/index.js";

const signUpRoutes = Router();

signUpRoutes.post('/signUp', async (req, res) => {
  console.log("register here");
  const { username, password } = req.body;
  console.log(username, password);
  const user = await User.create({ username: username, password: password });

  req.session.userId = user.id;

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }


});

export default signUpRoutes;

