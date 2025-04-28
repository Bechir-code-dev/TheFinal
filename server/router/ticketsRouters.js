const express = require("express");
const route = express.Router();
const { Ticket } = require("../models/ticketsSchema");

route.post("/addTicket", async (req, res) => {
  try {
    const newTicket = new Ticket({
      seates_zone: req.body.seates_zone,
      totalprice: req.body.totalprice,
      quantity: req.body.quantity,
    });
    await newTicket.save();
    res.status(200).json({ newTicket });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.get("/getAlltickets", async (req, res) => {
  try {
    const Alltickets = await Ticket.find();
    res.status(200).json({ Alltickets });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.get("/Oneticket/:id", async (req, res) => {
  try {
    const oneTicket = await Ticket.findById(req.params.id);
    res.status(200).json({ oneTicket });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.put("/UpdatingTicket/:id", async (req, res) => {
  try {
    const thenewUp = {
      seates_zone: req.body.seates_zone,
      totalprice: req.body.totalprice,
      quantity: req.body.quantity,
    };
    const UpdatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      thenewUp,
      { new: true }
    );
    res.status(200).json({ UpdatedTicket });
  } catch (error) {
    res.status(400).json({ error });
  }
});

route.delete("/deletingTicket/:id", async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({ deletedTicket });
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = route;
