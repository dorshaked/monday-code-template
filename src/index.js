import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import express from 'express';
import routes from './routes/index.js';

const port = parseInt(process.env.PORT) || 8080
const app = express();

app.use(express.json());
app.use(routes);
app.listen(port)

export default app;
