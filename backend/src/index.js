import express from 'express';
import dotenv from 'dotenv';
import {clerkMiddleware} from '@clerk/express';

import userRoutes from './routes/user.route.js';
import adminRoutes from './routes/admin.route.js';
import authRoutes from './routes/auth.route.js';
import songsRoutes from './routes/songs.route.js';
import albumsRoutes from './routes/albums.route.js';
import statsRoutes from './routes/stats.route.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(clerkMiddleware());  //thisi will add auth to req object

app.use(express.json()); // to parse req.bosy





// Connect to the database
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songsRoutes);
app.use("/api/albums", albumsRoutes);
app.use("/api/stats", statsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});