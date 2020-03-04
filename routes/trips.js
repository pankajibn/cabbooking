const cabManager = require("../classes/CabManager");
const express = require("express");
const router = express.Router();

const cabManagerObj = new cabManager();

router.post("/:id/end", (req, res) => {
  const { id } = req.params;
  const { latitude, longitude } = req.body;
  const trip = cabManagerObj.findTrip(id);

  if (trip.active) {
    trip.end(latitude, longitude);
    console.log("Total fare for the ride is: ", trip.fare);
    console.log("Total distance for the ride is: ", trip.distance);
  } else {
    console.log("The trip has already ended");
  }
  res.end();
});

module.exports = router;
