import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express'
import __dirname from './utils/index.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect("mongodb+srv://CoderUser:A123456*@pruebacoder.rpvqwdz.mongodb.net/?retryWrites=true&w=majority")

const swaggerOptions ={
    definition:{
        openapi: '3.0.1',
        info: {
            title:"Documentación de las APis",
            description: "Api de mascotas para los swagger"
        }
    },
    apis:[ "./docs/Users/Users.yaml"]
}

const spec = swaggerJsDoc (swaggerOptions)
app.use('/apidocs',swaggerUiExpress.serve,swaggerUiExpress.setup(spec))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
