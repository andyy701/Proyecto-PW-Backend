import express from 'express';
import router from './routes/registros_pac.routes.js'

const app=express();
const PORT=5000;

app.use(express.json());




app.listen(PORT,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
})
