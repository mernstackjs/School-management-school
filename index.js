import express from "express";
const app = express();

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "server health is OK",
    success: true,
  });
});

const PORT = 4040;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
