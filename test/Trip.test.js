const Car = require("../classes/Car");
const Trip = require("../classes/Trip.js");

describe("Trip", () => {
  describe("#start()", () => {
    const priceDetails = { perMinute: 1, perKilometer: 2, extraCost: 0 };
    const trip = new Trip(1, new Car({ x: 1, y: 1 }, priceDetails));

    it("should update the start coordinates", () => {
      trip.start(2, 2);
      expect(trip.startCoordinates).toEqual({ x: 2, y: 2 });
    });

    it("should call allocate on car", () => {
      trip.start(2, 2);
      expect(trip.car.allocated).toBeTruthy();
    });
  });

  describe("end()", () => {
    const priceDetails = { perMinute: 1, perKilometer: 2, extraCost: 0 };
    const trip = new Trip(1, new Car({ x: 1, y: 1 }, priceDetails));
    trip.start(2, 3);

    it("should update fare and distance", () => {
      trip.end(6, 3);
      expect(trip.distance).toBe(4);
      expect(trip.fare).toBe(8);
    });
  });
});
