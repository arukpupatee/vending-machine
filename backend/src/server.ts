import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './middlewares/error-handler';
import apiRouter from './api';
import { AppDataSource } from './data-source';

// Env config
dotenv.config();

// TypeORM initialize
AppDataSource.initialize();

// Express App
const app = express();
const server = createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/health', (req, res) => res.send('OK'));
app.use('/api', apiRouter);

// Middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
