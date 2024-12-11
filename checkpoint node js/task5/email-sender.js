const nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'skiouichames61@gmail.com',
      pass: 'xwvw ntmx vwqx xhwt'
    }
  });
  
  var mailOptions = {
    from: 'skiouichams61@gmail.com',
    to: ['sahraouimariem234@gmail.com',"omarskioui5@gmail.com","oo2377107@gmail.com","choibnyanajet@gmail.com"],
    subject: "helloooo",
    text: 'Winkom chabeb'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  