import express from 'express'
import UserController from './Controller/UserController.js'
const app = express();

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs')

app.get('/',UserController);

app.listen(3000)