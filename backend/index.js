import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ProjectRoutes from './Routes/ProjectRoutes.js';

//-------Routes


const app = express();

//--------Middleware
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use('/api', ProjectRoutes);

dotenv.config();

mongoose
    .connect(
        process.env.MONGO_DB_URI, {}
    )
    .then(() => app.listen(process.env.PORT, () => console.log(`Connected and listing to url ${process.env.MONGO_DB_URI} on port ${process.env.PORT}`)))
    .catch(err => console.log(err));