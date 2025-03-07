import express, { Request, Response, NextFunction, urlencoded } from 'express';
import cors from 'cors';

const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
  methods: 'GET, POST, PUT, DELETE',
  credentials: true,
};

const app = express();
const PORT = 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fruits = ['strawberry', 'grape'];

app.get('/api', (req, res, next) => {
  res.json({ fruits: fruits });
});

app.get('/', (req, res, next) => {
  res.send('Hello World": root');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 500,
    message: err.message,
  });
});

app.listen(PORT);
