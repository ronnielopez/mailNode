const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = new Router();

router.get('/', (req, res) => {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'innovacenterapplication@gmail.com',
        pass: 'innova123456'
    }
    });

    const level = (lev)=>{
        console.log(lev)
        if(lev == 1){
            return "85% english level"
        }else if(lev == 2){
            return "90% english level"
        }else if(lev == 3){
            return "Native Speaker"
        }
    }

    const mailOptions = {
    from: 'innovacenterapplication@gmail.com',
    to: 'innovacenterapplication@gmail.com',
    subject: 'Application from InnovaCenter',
    html: "<table border='0' cellspacing='0' cellpadding='0' width='100%'>"
    + "<tbody>"
    + "<tr>"
    + "<td align='center'>"
    + "<table border='0' cellspacing='0' cellpadding='0' width='100%' style='border-collapse: collapse!important;'>"
    + "<tbody>"
    + "<tr>"
    + "<td style='padding: 20px 20px 0 20px;'>"
    + "<table border='0' cellspacing='0' cellpadding='0' width='100%' style='border-collapse: collapse!important;'>"
    + "<tbody>"
    + "<tr>"
    + "<td style='border-bottom: 1px solid #b4bec6;padding: 40px 0 40px 0;'>"
    + "<table border='0' cellspacing='0' cellpadding='0' width='100%' style='border-collapse: collapse!important;'>"
    + "<tbody>"
    + "<tr>"
    + "<td width='48%'><img width='170' src='' style='border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;' /></td>"
    + "<td align='center' width-='4' style='font-size: 14px; font-family: arial,sans-serif;color: #011b41;'>Innova Recruitment</td>"
    + "</tr>"
    + "</tbody>"
    + "</table>"
    + "</td>"
    + "</tr>"
    + "<tr>"
    + "<td style='border-bottom: 1px solid #b4bec6;padding: 40px 0 40px 0;'>"
    + "<table>"
    + "<tbody>"
    + "<tr>"
    + "<td style='padding: 0 0 20px 0; font-family: arial;font-size: 36px;font-weight: bold;color: #011b41;'>"
    + "Personal Information"
    + "</td>"
    + "</tr>"
    + "<tr>"
    + "<td style='font-size: 16px;line-height: 24px;font-family: arial,sans-serif;color: #011b41;'>"
    + "Full Name: " + req.query.firstname + " " + req.query.lastname + " <br>"
    + "Email: " + req.query.mail + " <br>"
    + "Phone: " + req.query.phone + " <br>"
    + "</td>"
    + "</tr>"
    + "</tbody>"
    + "</table>"
    + "</td>"
    + "</tr>"
    + "<tr>"
    + "<td style='border-bottom: 1px solid #b4bec6;padding: 40px 0 40px 0;'>"
    + "<table>"
    + "<tbody>"
    + "<tr>"
    + "<td style='padding: 0 0 20px 0; font-family: arial;font-size: 25px;font-weight: bold;color: #011b41;'>"
    + "English Level"
    + "</td>"
    + "</tr>"
    + "<tr>"
    + "<td style='font-size: 16px;line-height: 24px;font-family: arial,sans-serif;color: #011b41;'>"
    + level(req.query.level)
    + "</td>"
    + "</tr>"
    + "</tbody>"
    + "</table>"
    + "</td>"
    + "</tr>"

    + "<tr>"
    + "<td style='border-bottom: 1px solid #b4bec6;padding: 40px 0 40px 0;'>"
    + "<table>"
    + "<tbody>"
    + "<tr>"
    + "<td style='padding: 0 0 20px 0; font-family: arial;font-size: 25px;font-weight: bold;color: #011b41;'>"
    + "Job Experience"
    + "</td>"
    + "</tr>"
    + "<tr>"
    + "<td style='font-size: 16px;line-height: 24px;font-family: arial,sans-serif;color: #011b41;'>"
    + req.query.job
    + "</td>"
    + "</tr>"
    + "</tbody>"
    + "</table>"
    + "</td>"
    + "</tr>"

    + "</tbody>"
    + "</table>"
    + "</td>"
    + "</tr>"
    + "</tbody>"
    + "</table>"
    + "</td>"
    + "</tr>"
    + "</tbody>"

    + "</table>"
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        res.send(error);
    } else {
        res.send('Email sent: ' + info.response);
    }
    });
});

module.exports = router;