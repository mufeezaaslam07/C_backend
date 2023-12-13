const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3600;

app.use("/api", routes);

app.listen(PORT, () => console.log("Server connected"));
