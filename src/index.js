const express=require('express');
require('./db/mongoose');
const User=require('./models/user');
const Tasks=require('./models/tasks');
const userRouter=require('./routers/user');
const taskRouter=require('./routers/task');

const app=express();
const port=process.env.PORT;


// app.use((req,res,next)=>{
//     console.log(req.method,req.path);
//     next();
// })
// app.use((req,res,next)=>{
//     res.status(503).send('This site is Under Maintainance')

//// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port,()=>{
    console.log('server is up at port',port);
})
