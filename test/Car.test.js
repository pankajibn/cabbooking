const Car = require("../classes/Car");

describe("Car", () => {
  describe("allocate()", () => {
    it("Should set allocated to true", () => {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
      const car = new Car({ x: 2, y: 3 }, priceObj, "pink");
      car.allocate();
      expect(car.allocated).toBeTruthy();
    });
  });
});
describe("Car", () => {
  describe("deallocate()", () => {
    it("Should set allocated to false", () => {
      const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
      const car = new Car({ x: 2, y: 3 }, priceObj, "pink");
      car.deAllocate();
      expect(car.allocated).toBeFalsy();
    });
  });
});

describe("getPerMinutePrice()", () => {
  it("Should return 1", () => {
    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
    const car = new Car({ x: 2, y: 3 }, priceObj, "pink");
    expect(car.getPerMinutePrice()).toBe(1);
  });
});

describe("getPerKiloMeterPrice()", () => {
  it("Should return 2", () => {
    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
    const car = new Car({ x: 2, y: 3 }, priceObj, "pink");
    expect(car.getPerKilometerPrice()).toBe(2);
  });
});

describe("getExtraCost()", () => {
  it("Should return 5", () => {
    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
    const car = new Car({ x: 2, y: 3 }, priceObj, "pink");
    expect(car.getExtraCost()).toBe(5);
  });
});

describe("endTrip()", () => {
  const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
  const car = new Car({ x: 2, y: 3 }, priceObj, "pink");

  it("updates the currentX and currentY with given value", function() {
    car.endTrip(5, 5);
    expect(car.currentX).toBe(5);
    expect(car.currentY).toBe(5);
  });

  it("set the allocated flag to false", function() {
    expect(car.allocated).toBeFalsy();
  });
});

describe("properties", () => {
  describe("when car has a color", function() {
    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 5 };
    const car = new Car({ x: 2, y: 3 }, priceObj, "pink");

    it("should return pink as color", function() {
      expect(car.color).toBe("pink");
    });

    it("should return 2 as currentX", function() {
      expect(car.currentX).toBe(2);
    });

    it("should return 3 as currentY", function() {
      expect(car.currentY).toBe(3);
    });
  });

  describe("when car does not have any color", function() {
    const priceObj = { perMinute: 1, perKilometer: 2, extraCost: 0 };
    const car = new Car({ x: 2, y: 3 }, priceObj);

    it("should return black as color", function() {
      expect(car.color).toBe("black");
    });

    it("should return 2 as currentX", function() {
      expect(car.currentX).toBe(2);
    });

    it("should return 3 as currentY", function() {
      expect(car.currentY).toBe(3);
    });
  });
});
