const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{ 
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim:true,
//         lowercase:true,
//         validate(value){ 
//             if(!validator.isEmail(value))
//             {
//                 throw new Error('Invalid Email')
//             }
//         }
         
//     },
//     age:{
//         type:Number,
//         default:0
//     },
//     password:{
//         type: String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             let a=value.toLowerCase();
//             if(a.includes("password"))
//             {
//                 throw new Error('Invalid Password');
//             }
//         }

//     }
// })

// const me=new User({
//     name:'    Badri    ',
//     email:'123@gmail.com',
//     password:'samplepass'
// })

// me.save().then((me)=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error! :',error)
// })

// const Tasks=mongoose.model('Tasks',{
//     description:{
//         type:String,
//         trim:true,
//         required:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })
 
// const mail=new Tasks({
//     description:'   mail jim   ',
    
// })

// mail.save().then((mail)=>{
//     console.log(mail);
// }).catch((error)=>{
//     console.log(error);
// })