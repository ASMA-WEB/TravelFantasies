const { json } = require("body-parser");
const { validate } = require("../models/hotels");
var bodyParser = require("body-parser");
function validateHotel(req, res, next) {
  let { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
}
module.exports = validateHotel;
