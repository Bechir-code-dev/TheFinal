const express = require("express");
const route = express.Router();
const { Event } = require("../models/eventSchema");

route.post("/addEvent", async (req, res) => {
  try {
    const newEvent = new Event({
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
    });
    await newEvent.save();
    res.status(200).json({ newEvent });
  } catch (error) {
    res.status(400).json({ error });
  }
});
route.get("/getAllEvents", async (req, res) => {
  try {
    const AllEvents = await Event.find();
    res.status(200).json({ AllEvents });
  } catch (error) {
    res.status(400).json({ error });
  }
});
route.get("/getOneEvent/:id", async (req, res) => {
  try {
    const OneEvent = await Event.findById(req.params.id);
    res.status(200).json({ OneEvent });
  } catch (error) {
    res.status(400).json({ error });
  }
});
route.put("/updateEvent/:id", async (req, res) => {
  try {
    const thenewUp = {
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
    };
    const UpEvent = await Event.findByIdAndUpdate(req.params.id, thenewUp, {
      new: true,
    });
    res.status(200).json({ UpEvent });
  } catch (error) {
    res.status(400).json({ error });
  }
});
route.delete("/deleteEvent/:id", async (req, res) => {
  try {
    const deleteEvent = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleteEvent });
  } catch (error) {
    res.status(400).json({ error });
  }
});
module.exports = route;
