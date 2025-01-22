import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

// Dummy API Endpoints
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send({ message: "Server is healthy" });
});

app.post("/data", (req: Request, res: Response) => {
  res.status(201).send({ message: "Data received", data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
