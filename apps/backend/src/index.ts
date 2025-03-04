import express from "express";
import userRoutes from "./routes/login";
import { RoomRoutes } from "./routes/room";

const app = express();
const port = process.env.PORT || 8004;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/room", RoomRoutes);

app.listen(port, () => {
  console.log("listening on port " + port);
});
