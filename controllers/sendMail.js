const mailTemplate = require("../template/template");
require("dotenv").config()
const transporter = require("../config/nodemailer-config")

const qr = require("qr-image")

const sendMail = async (req, res) => {
  const { user, emailID, id } = req.body;
  const qrData = qr.imageSync(id, { type: "png" })

  const info = {
    to: emailID,
    subject: "Mesmerizer",
    html: mailTemplate({ name: user, qr: qrData }),
    attachments: [
      {
        filename: "qr_verify.png",
        content: qrData,
        encoding: "base64",
        cid: "qr"
      }
    ]
  }
  await new Promise((resolve, reject) => {
    transporter.sendMail(info, (err, data) => {
      if (err) {
        reject(err);
        res.status(200).json({ message: "Failed", error: err });
      } else {
        resolve(data);
        res.status(200).json({ message: "Success" });
      }
    });
  });
}

module.exports = sendMail;
