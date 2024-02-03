import { Router } from "express";
import { User } from "../models/index.js";
import jwt from 'jsonwebtoken';

import { loginRequired } from "../middlewares/auth.middleware.js";

const authRoutes = Router();
console.log(jwt);

authRoutes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });

  if (user && user.password === password) {
    console.log(user);
    jwt.sign({ username }, 'secret', {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        username
      });
    })
    req.session.userId = user.userId;
    res.json({ success: true, username: username });
  } else {
    res.json({ success: false });
  }
});

// Note the `loginRequired` argument passed to the routes below!

authRoutes.post('/logout', loginRequired, (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

export default authRoutes;