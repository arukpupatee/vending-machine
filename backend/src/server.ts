import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/error-handler';

// Env config
dotenv.config();

// Express App
const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/health', (req, res) => res.send('OK'));

// Middleware
app.use(errorHandler);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
