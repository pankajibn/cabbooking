const Car = require("../classes/Car");
const CabManager = require("../classes/CabManager");

describe("Cab Manager", () => {
  describe("initialization", () => {
    it("should be 10 cars in the pool", () => {
      const manager = new CabManager();
      expect(manager.pool.length).toBe(10);
    });
  });

  describe("bookTrip", function() {
    const manager = new CabManager();

    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
    const priceObjForPink = { perMinute: 1, perKilometer: 2, extraCost: 5 };

    const car1 = new Car({ x: 0, y: 0 }, priceObj);
    const car2 = new Car({ x: 3, y: 3 }, priceObjForPink, "pink");

    manager.pool = [car1, car2];

    it("should return the nearest car", function() {
      const trip = manager.bookTrip(1, 1, "black");
      expect(trip.car).toBe(car1);
    });

    it("should return the pink car if it has been asked for", function() {
      const trip = manager.bookTrip(1, 1, "pink");
      expect(trip.car).toBe(car2);
    });
  });
});
