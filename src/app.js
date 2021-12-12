import express from "express";
import indexRoutes from './routes/indexRoute'

const app = express();

app.use(indexRoutes)

export default app