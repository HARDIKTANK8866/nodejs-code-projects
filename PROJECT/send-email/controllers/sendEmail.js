const nodemailer = require('nodemailer')



// const sendEmail = async (req,res)=>{
//     let testAccount = await nodemailer.createTestAccount()


//     //FROM Ethereal test account.
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'retha.rippin@ethereal.email',
//             pass: 'zw4dFzrKk2GZMkR8mf'
//         }
//     });

//     //CODE FROM Nodemailer
//     let info = await transporter.sendMail({
//         from:'"Hardik codes" <hardik@gamail.com>',
//         to: "bar@example.com",
//         subject: 'Hello',
//         html:'<h2>Sending Emails with Node.JS</h2>'
//     })

//     res.json(info)
// }



const sendEmail = async (req, res) => {
    try {
        // Create a transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'htank8866@gmail.com', // Replace with your Gmail address
                pass: 'rqab jwvf xzdu bxva'  // Replace with your Gmail App Password if you have 2FA enabled
            }
        });

        // Setup email data
        let mailOptions = {
            from: '"Hardik Tank" <htank8866@gmail.com>', // Replace with your Gmail address
            to: 'htank8866@gmail.com', // Replace with the recipient's email address
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // Plain text body
            html: '<b>Hello world?</b>' // HTML body
        };

        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId);
        res.json({ messageId: info.messageId, info: info });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

module.exports = sendEmail  