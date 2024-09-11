import express from "express";

const app = express();
const PORT = process.env.PORT ?? 443;

app.get("/", (_, res) => res.json({ message: "Hello from Express Server 👋🏻" }));

app.get("/health", (_, res) =>
  res.json({ message: "Everything is healthy 👀" })
);

// Start the Express Server
app.listen(PORT, () =>
  console.log(`Express Application Started on PORT ${PORT}`)
);
