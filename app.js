import express from 'express';
import registrosPacRoutes from './routes/registros_pac.routes.js'
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());

app.use(registrosPacRoutes)


export default app;
