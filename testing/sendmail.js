var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teacherreview47@gmail.com',
    pass: 'review47'
  }
});

var mailOptions = {
  from: 'teacherreview47@gmail.com',
  to: 'tuhintowhidul9@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    
  }
});
