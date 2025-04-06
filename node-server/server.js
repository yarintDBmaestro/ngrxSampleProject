import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const users = [
  { id: 1, email: 'admin', password: 'admin' },
  { id: 2, email: 'user', password: 'user' },
];

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.use(express.json());

app.post('/login', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log("email: ", email, "password: ", password);
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', email: user.email});
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});