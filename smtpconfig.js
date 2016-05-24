module.exports = smtpConfig = {
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true, // use SSL 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized:false
  }  
};

