const express = require("express");
const update = require("../controllers/update.js"); 
const routes = express.Router();

routes.route("/").put(update);

module.exports = routes;
