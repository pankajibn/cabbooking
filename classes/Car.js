class Car {
  constructor(coordinates, priceDetails, color = "black") {
    this.currentX = coordinates.x;
    this.currentY = coordinates.y;
    this.color = color;
    this.priceDetails = priceDetails;
    this.allocated = false;
  }

  getPerMinutePrice() {
    return this.priceDetails.perMinute;
  }

  getPerKilometerPrice() {
    return this.priceDetails.perKilometer;
  }

  getExtraCost() {
    return this.priceDetails.extraCost;
  }

  allocate() {
    this.allocated = true;
  }

  deAllocate() {
    this.allocated = false;
  }

  setCoordinates(coordX, coordY) {
    this.currentX = coordX;
    this.currentY = coordY;
  }

  getCoordinates() {
    return { coordX: this.currentX, coordY: this.currentY };
  }

  isAvailable(color) {
    return this.color === color && !this.allocated;
  }

  endTrip(endCoordX, endCoordY) {
    this.setCoordinates(endCoordX, endCoordY);
    this.deAllocate();
  }
}

module.exports = Car;
