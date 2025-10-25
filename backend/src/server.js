import express from "express"
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middlware/rateLimiter.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(rateLimiter)

app.use("/api/notes", notesRoutes);

connectDB().then(() =>{
app.listen( PORT, () =>{
    console.log("Server started on port:", PORT);
});
});
