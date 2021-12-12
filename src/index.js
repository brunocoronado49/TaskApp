import express from "express";
import indexRoutes from './routes/indexRoute'

const app = express();

app.use(indexRoutes)

app.listen(3000);
console.log("Server on port: ", 3000);
