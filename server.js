import express from "express";
import path from "path";
import nicknamesRoutes from "./routes/nicknames.js";
import logger from "./middleware/logger.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(express.static(path.join(process.cwd(), "public")));
app.use("/api/nick", nicknamesRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
