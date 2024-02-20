import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './modules/user/user.router';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World from our awesome server!');
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  console.log('Response from client');
  res.json({
    msg: 'Successfully Received.',
  });
});

export default app;
