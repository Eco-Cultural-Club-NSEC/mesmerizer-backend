const express = require("express");
const sendMail = require("../controllers/sendMail.js"); 
const routes = express.Router();

routes.route("/").post(sendMail);

module.exports = routes;
