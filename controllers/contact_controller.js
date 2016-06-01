const nodemailer = require('nodemailer');
const smtpConfig = require('../config/smtpconfig');

const index = (request, reply) => {
  reply.view('contact/contact', {
    title: 'Contact',
    message: 'Welcome to the contact page'
  });
};

const post = (request, reply) => {
  var transporter = nodemailer.createTransport(smtpConfig);
   
  var mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_RECIPIENT,
    subject: process.env.EMAIL_SUBJECT,
    text: request.payload.message,
    html: '<b>' + request.payload.message + ' </b>'
  };
   
  transporter.sendMail(mailOptions, function(error, info){
    if(error) return console.log(error);
  });

  reply.view('contact/contact-post', {
    params: request.payload
  })
};

module.exports = {
	index: index,
	post: post
};

