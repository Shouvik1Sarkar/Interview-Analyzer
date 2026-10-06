import { configDotenv } from "dotenv";
configDotenv({ path: ".././.env" });

import app from "./src/app.js";
import globalError from "./src/middleware/globalError.middleware.js";

const port = 3000;

app.use(globalError);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 
