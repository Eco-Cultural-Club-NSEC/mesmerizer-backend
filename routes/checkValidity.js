const express = require("express");
const checkValidity = require("../controllers/checkValidity.js"); 
const routes = express.Router();

routes.route("/").post(checkValidity);

module.exports = routes;
