import { db } from "../config/db.js";


//This helps to connect to the database
await db.sync({ force: true });