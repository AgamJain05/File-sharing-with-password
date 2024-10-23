import express from 'express';
import cors from 'cors';
import DBConnection from './db/connect.js';
import routes from './routes/routes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors());
app.use('/', routes);
  
const PORT = 8000;

DBConnection();


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));