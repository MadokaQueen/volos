const express = require("express");
const router = express.Router();

// Car Model
const Car = require("../../models/Car");

// @route   GET api/cars
// @desc    get all cars
router.get("/", (req, res) => {
  Car.find()
    .sort({ name: 1 })
    .then(cars => res.json(cars))
    .catch(err => res.json({ success: false, err }));
});

// @route   GET api/cars/byAdress/:adress
// @desc    get car by adress
router.get("/byAdress/:adress", (req, res) => {
  Car.findOne({ adress: req.params.adress })
    .then(car => res.json(car))
    .catch(err => res.json({ success: false, err }));
});

// @route   POST api/cars
// @desc    post a new car
router.post("/", (req, res) => {
  const newCar = new Car({
    name: req.body.name,
    adress: req.body.adress,
    vehicleClass: req.body.vehicleClass,

    bodyType: req.body.bodyType,
    engineCapacity: req.body.engineCapacity,
    transmission: req.body.transmission,
    typeOfFuel: req.body.typeOfFuel,

    capacityL: req.body.capacityL,
    fuelCapacityL: req.body.fuelCapacityL,

    prices: req.body.prices,

    description: req.body.description
  });

  newCar
    .save()
    .then(car => res.json(car))
    .catch(err => res.json({ success: false, err }));
});

// @route   DELETE api/cars/:id
// @desc    delete car by id
router.delete("/:id", (req, res) => {
  Car.findById(req.params.id)
    .then(car => car.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
