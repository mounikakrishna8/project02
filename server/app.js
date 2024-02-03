import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import router from './routes/index.js';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();
const port = '4090';
// intializing stripe specifically for our account
const stripe = await Stripe(process.env.sk_test_51Of7cpAzxk7JvbcB7Mk87LKuxzQhQBdMBoloZtpRo9SQDL2SEPN4WoiGBl5bjkJE1sAWTDvtHir89rZCppp6iT3g00di9yzFP7)
ViteExpress.config({ printViteDevServerHost: true });

app.use(cors());
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));

app.use(router);


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));



