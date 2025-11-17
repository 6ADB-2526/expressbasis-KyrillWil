const express = require("express");
const crlItems = require("../controllers/items")

const routes = express.Router();

routes.get("/", crlItems.base)

module.exports = routes;
