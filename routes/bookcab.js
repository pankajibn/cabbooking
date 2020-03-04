const { validate } = require("../models/book");
const cabManager = require("../classes/CabManager");
const express = require("express");
const router = express.Router();

const cabManagerObj = new cabManager();

router.post("/", async (req, res) => {
  const error = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { latitude, longitude, color } = req.body;
  const trip = cabManagerObj.bookTrip(latitude, longitude, color);
  const data = { tripId: trip.id, carColor: trip.car.color };
  res.send(data);
});

module.exports = router;
