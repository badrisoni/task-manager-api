const sgMail= require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'Badri@gmail.com',
        subject:'Welcome aboard!',
        text : `Welcome to the app, ${name}. Hope you enjoy it.`
    })

}
const sendCancelEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'Badri@gmail.com',
        subject:'Account Deleted!',
        text : `${name}, Why are you leaving!`
    })

}
module.exports ={
    sendWelcomeEmail,
    sendCancelEmail
}