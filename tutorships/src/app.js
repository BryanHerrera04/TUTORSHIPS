//configurar el servidor
import express, {json} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';

//importing routes
import tutorRoutes from './routes/tutor';
import studentRoutes from './routes/student';
import userRoutes from './routes/user'

//Initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors({origin: 'http://localhost:4200'}))

// routes
app.use('/api/tutor', tutorRoutes)
app.use('/api/student', studentRoutes);
app.use('/api/user', userRoutes);

export default app;