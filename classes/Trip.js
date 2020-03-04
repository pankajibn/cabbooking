class Trip {
  constructor(id, car) {
    this.id = id;
    this.car = car;
    this.startTime = new Date();
    this.endTime = new Date();
    this.startCoordinates = { x: 0, y: 0 };
    this.endCoordinates = { x: 0, y: 0 };
    this.distance = 0;
    this.fare = 0;
    this.active = true;
  }

  updateStartCoordinates(coordX, coordY) {
    this.startCoordinates.x = coordX;
    this.startCoordinates.y = coordY;
  }

  updateEndCoordinates(coordX, coordY) {
    this.endCoordinates.x = coordX;
    this.endCoordinates.y = coordY;
  }

  getTotalDistance() {
    const xDiff = (this.startCoordinates.x - this.endCoordinates.x) ** 2;
    const yDiff = (this.startCoordinates.y - this.endCoordinates.y) ** 2;
    return (xDiff + yDiff) ** 0.5;
  }

  getTotalFareForDistance() {
    const distance = this.getTotalDistance();
    return this.car.getPerKilometerPrice() * distance;
  }

  getTotalFareForDuration() {
    const duration = this.endTime.getMinutes() - this.startTime.getMinutes();
    return this.car.getPerMinutePrice() * duration;
  }

  getTotalFare() {
    return (
      this.getTotalFareForDistance() +
      this.getTotalFareForDuration() +
      this.car.getExtraCost()
    );
  }

  updateTripFareAndDistance(userCoordX, userCoordY) {
    this.updateEndCoordinates(userCoordX, userCoordY);
    this.fare = this.getTotalFare();
    this.distance = this.getTotalDistance();
  }

  start(userCoordX, userCoordY) {
    this.startTime = new Date();
    this.updateStartCoordinates(userCoordX, userCoordY);
    this.car.allocate();
  }

  end(userCoordX, userCoordY) {
    this.endTime = new Date();
    this.car.endTrip(userCoordX, userCoordY);
    this.updateTripFareAndDistance(userCoordX, userCoordY);
    this.active = false;
  }
}

module.exports = Trip;
