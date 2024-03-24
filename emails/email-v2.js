const express = require("express");
const nodemailer = require('nodemailer');
const route = express.Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'botsendernoreplyv2@gmail.com',
        pass: 'oiegkhpaiudyghbu',
    }
}); 

route.post('/text-mail', (req, res) => {
    const {to, subject, text} = req.body;

    const mailData = {
        from: 'botsendernoreplyv2@gmail.com',
        to, subject, text
    }

    transporter.sendMail(mailData, (error, info) => {
        if(error){
            return console.log('message error : ', error)
        }

        res.status(200).send({message: "Mail v2 Send Succcess!", message_id: info.messageId})
    })
})

module.exports = route

