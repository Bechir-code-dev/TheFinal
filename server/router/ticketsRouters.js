const express = require("express");
const route = express.Router();
const { Ticket } = require("../models/ticketsSchema");

route.post("/addTicket", async (req, res) => {
  try {
    const newTicket = new Ticket({
      user_fullname: req.body.user_fullname,
      seates_zone: req.body.seates_zone,
      totalprice: req.body.totalprice,
      bookingdate: req.body.bookingdate,
      status: req.body.status,
    });
    await newTicket.save();
    res.status(200).json({ newTicket });
  } catch (error) {
    res.status(400).json({ error });
  }
});
route.get("/Alltickets", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({ tickets });
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
      user_fullname: req.body.user_fullname,
      seates_zone: req.body.seates_zone,
      totalprice: req.body.totalprice,
      bookingdate: req.body.bookingdate,
      status: req.body.status,
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
route.delete('/deleting/:id' , async(req , res)=>{
  try {
    const deleted = await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({deleted});
  } catch (error) {
    res.status(400).json({error});
  }
});
module.exports = route;
