import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
 process.env.MONGO
).then(()=>{
    console.log('Connected to the MOngoDB!');
}).catch((err)=>{
    console.log(err);
})

const __dirname=path.resolve();


//by deafult we are not allow to send json to server so here we allow to send json by this line of code



app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});



app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'));
})

//middlleware for errors
app.use((err,req,res,next)=>{

const statusCode=err.statusCode || 500;
const message=err.message || 'Internal Server error';
return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
})
})



