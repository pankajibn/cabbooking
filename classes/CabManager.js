const Car = require("./Car");
const Trip = require("./Trip");

const NUMBER_OF_CARS = 10;
const COLORS = ["pink", "black"];

const getColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const generateInitialCoordinates = () => {
  const sign = [-1, 1];
  const coordX =
    sign[Math.floor(Math.random() * sign.length)] * (Math.random() * 100);
  const coordY =
    sign[Math.floor(Math.random() * sign.length)] * (Math.random() * 100);
  return { x: coordX, y: coordY };
};

const findDistance = (xIndex1, yIndex1, xIndex2, yIndex2) => {
  const xDiff = (xIndex1 - xIndex2) ** 2;
  const yDiff = (yIndex1 - yIndex2) ** 2;
  return (xDiff + yDiff) ** 0.5;
};

const getPriceDetails = color => {
  const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
  if (color === "pink") {
    priceObj.extraCost = 5;
  }
  return priceObj;
};

class CabManager {
  constructor() {
    this.pool = [];
    this.trips = [];
    this.initialisePool();
    this.tripNumber = 0;
  }

  initialisePool() {
    for (let i = 0; i < NUMBER_OF_CARS; i += 1) {
      const color = getColor();
      const coordinates = generateInitialCoordinates();
      const priceDetails = getPriceDetails(color);

      this.pool.push(new Car(coordinates, priceDetails, color));
    }
  }

  findNearestCar(userCoordX, userCoordY, colorPreference) {
    let minDistance = 180;
    let nearestCar;
    for (let i = 0, len = this.pool.length; i < len; i += 1) {
      const car = this.pool[i];

      const { coordX, coordY } = car.getCoordinates();
      const distance = findDistance(userCoordX, userCoordY, coordX, coordY);

      if (distance < minDistance && car.isAvailable(colorPreference)) {
        minDistance = distance;
        nearestCar = this.pool[i];
      }
    }
    return nearestCar;
  }

  addTrip(userCoordX, userCoordY, car) {
    const trip = new Trip(this.tripNumber, car);
    trip.start(userCoordX, userCoordY);
    this.trips.push(trip);
    this.tripNumber += 1;
    return trip;
  }

  findTrip(tripId) {
    return this.trips[tripId];
  }

  bookTrip(userCoordX, userCoordY, colorPreference) {
    if (userCoordX < -100 && userCoordX > 100) return null;
    if (userCoordY < -100 && userCoordY > 100) return null;

    const car = this.findNearestCar(userCoordX, userCoordY, colorPreference);
    return this.addTrip(userCoordX, userCoordY, car);
  }
}

module.exports = CabManager;
