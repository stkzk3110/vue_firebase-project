const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;

// 送信に使用するメールサーバーの設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fisherman0825dd@gmail.com',
    pass: 'kazuki0825'
  }
});

// eslint-disable-next-line no-unused-vars
exports.sendMail = functions.https.onCall((data, context) => {
  // メール設定
  const mailOptions = {
    from: 'fisherman0825dd@gmail.com',
    to: 'fisherman3110dd@gmail.com',
    subject: "ホームページお問い合わせ",
    text: 'You got a mail!'
  };

  // 管理者へのメール送信
  // eslint-disable-next-line no-unused-vars
  transporter.sendMail(mailOptions, (error, data) => {
    // eslint-disable-next-line no-console
    if (error) console.log(error);
    // eslint-disable-next-line no-console
    console.log(data);
  });
});