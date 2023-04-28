import express from 'express';
import cors from 'cors';
import { router } from './rotuloRoutes';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
