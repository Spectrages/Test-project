import express from 'express';
import cors from "cors"
import mongoose from 'mongoose';
import { registerValidation, loginValidation} from "./Validations/auth.js";
import { UserController } from './Controllers/index.js'
import { checkAuth, handleValidationsErrors }  from './Utils/index.js'

const PORT = 5000;
const MONGODB = "mongodb+srv://spectrages:Spectrages15011997@cluster0.orfyg2s.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(MONGODB)
    .then(() => console.log('DB ok'))
    .catch((error) => console.log(`DB connect error: ${error}`));

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
}));

app.post('/auth/login', loginValidation, handleValidationsErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationsErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

const start = () => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
};

start();
