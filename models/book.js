const Joi = require("@hapi/joi");
function validateBooking(book) {
  const schema = {
    latitude: Joi.number()
      .required()
      .min(-90)
      .max(90),
    longitude: Joi.number()
      .required()
      .min(-180)
      .max(180),
    color: Joi.string().required
  };
}

exports.validate = validateBooking;
